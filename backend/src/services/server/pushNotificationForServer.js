import admin from 'firebase-admin';

import { getDatabase } from 'firebase-admin/database';

import { check_ip_status } from '../../utils/index.js';

import cron from 'node-cron';

import firebaseConfigJson from '../../utils/firebaseConfig.json' assert { type: "json" };

const firebaseConfig = JSON.parse(JSON.stringify(firebaseConfigJson));

const app = admin.initializeApp({
  credential: admin.credential.cert({
    ...firebaseConfig,
    privateKey: firebaseConfig.private_key.replace(/\\n/g, '\n'),
  }),
  databaseURL: 'https://hng-sandpaper-cron-db-default-rtdb.firebaseio.com',
});

const db = getDatabase(app);

export default class PushNotification {
  static async saveServerToFirebase(data) {
    const {
      server: { id, ipAddress, created_at },
      isOnline,
    } = data;

    const ref = db.ref('opspad');

    const serversRef = ref.child(`servers/${id}`);

    const notificationsRef = ref.child(`notifications/${id}`);

    serversRef.set({
      id,
      ipAddress,
    });

    notificationsRef.set({
      serverId: id,
      status: isOnline,
      msg: 'server active',
      last_checked: `${created_at}`,
    });
  }

  static async getServersFromFirebase() {
    const ref = db.ref('opspad/servers');

    const result = [];

    const readDataPromise = () => {
      return new Promise(
        (resolve, reject) => {
          ref.once('value', (data) => {
            resolve(data);
          });
        },
        (err) => {
          reject(err);
        }
      );
    };

    try {
      const data = await readDataPromise();

      const servers = data.val();

      const serverIds = servers ? Object.keys(servers) : [];

      if (serverIds.length > 0) {
        serverIds.forEach((key) => {
          result.push(servers[key]);
        });
      }

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async intializeCronJob() {
    const ref = db.ref('opspad');

    // Cron job duration pegged at 1 mins for development
    const cronDuration = 1;

    const updateDataPromise = (notificationRef, data) => {
      console.log(`update server (${data.serverId}) notification at ${new Date().toISOString()}`);
      return new Promise((resolve, reject) => {
        notificationRef.update(
          {
            msg: data.msg,
            serverId: data.serverId,
            last_checked: `${new Date().toISOString()}`,
            status: data.status,
          },
          (error) => {
            if (error) {
              return reject(err);
            }

            return resolve(true);
          }
        );
      });
    };

    console.log(`CronJob initialized and will be executed in the next ${cronDuration} mins`);

    const task = cron.schedule(
      `*/${cronDuration} * * * *`,
      async () => {
        console.log(`CronJob began execution after ${cronDuration} mins`);

        const servers = await PushNotification.getServersFromFirebase();

        if (Object.keys(servers).length > 0) {
          await Promise.all(
            servers.map(async (server) => {
              try {
                const status = await check_ip_status(server.ipAddress);

                if (!status) {
                  const notificationRef = ref.child(`notifications/${server.id}`);

                  //   Update the server error status
                  return await updateDataPromise(notificationRef, {
                    status,
                    serverId: server.id,
                    msg: 'server inactive',
                  });
                }
                //   Update again to overwrite any previous error state which has been updated by the devops engineer
                return await updateDataPromise(notificationRef, { status, serverId: server.id, msg: 'server active' });
              } catch (error) {
                console.error(error);
              }
            })
          );
        }
        console.log(`CronJob ended execution due to unavailability of realtime data`);
      },
      {
        scheduled: false,
      }
    );

    return task.start();
  }
}
