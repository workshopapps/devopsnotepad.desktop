import { assert } from 'chai';
import supertest from 'supertest';
import app from '../../src/initialize.js';
import Documentator from '../../src/utils/documentator/index.js';
import connection from '../../src/database/setup.js';
import ServerRepo from '../../src/database/repositories/ServerRepo.js';

export const request = supertest.agent(app);

export const docmaker = Documentator.getInstance();

const getNotificationByLog = async (log) => {
  return connection('notifications').where('log', log).first();
};

let notificationId;
export let serverId = '';
export const params = {
  name: 'example server',
  ipAddress: 'google.com',
  deviceId: '80988579',
};

before(async () => {
  // Deletes every records table before any test is run to avoid collisions.
  await connection.raw('delete from notifications');
  await connection.raw('delete from servers');

  await ServerRepo.create(params);
  const server = await ServerRepo.getServerByName(params.name, params.deviceId);
  serverId = server.id;
});

describe('Notification', () => {
  it('should create new notification for a server', async () => {
    const res = await request.post('/server/' + serverId + '/notifications').send({
      log: 'add data points',
    });

    // const noti = await getNotificationByLog("add data points")
    // notificationId = noti.id
    assert.equal(res.status, 200);
    docmaker.addEndpoint(res);
  });

  it('should throw error when creating a notification with an invalid server_id', async () => {
    const res = await request.post(`/server/fksldflkdsfkdsjks/notifications`).send({
      log: 'add data points',
    });

    assert.equal(res.status, 400);
    assert.include(res.body.message, 'An error occured while creating new logs, server do not exist');
  });

  it('should throw error if there is no server from the requesting device', async () => {
    const res = await request.get('/server?device=00102939');
    assert.equal(res.status, 404);
  });

  it('should get new notifications and check default ordering', async () => {
    const res = await request.get(`/server/${serverId}/notifications`);

    let notifications = res.body.notifications;
    assert.equal(res.status, 200);
    assert.equal(notifications.length, 1);
    assert.equal(Object.keys(notifications[0]).length, 5);
    docmaker.addEndpoint(res);
  });

  it('should check pagination when getting notification', async () => {
    const res = await request.get(`/server/${serverId}/notifications?page=1&limit=2`);

    let notifications = res.body.notifications;
    assert.equal(res.status, 200);
    assert.equal(notifications.length, 1);
    docmaker.addEndpoint(res);
  });

  it('should return notifications for the last 1 week and check ordering in asc order', async () => {
    const res = await request.get(`/server/${serverId}/notifications?range=weekly&orderBy=created_at+asc`);

    let notifications = res.body.notifications;
    assert.equal(res.status, 200);
    assert.equal(notifications.length, 1);
    docmaker.addEndpoint(res);
  });

  it('should return notifications for the last 1 month', async () => {
    const res = await request.get(`/server/${serverId}/notifications?range=monthly`);

    let notifications = res.body.notifications;
    assert.equal(res.status, 200);
    assert.equal(notifications.length, 1);
    docmaker.addEndpoint(res);
  });

  it('should return default notifications if query parameter is invalid', async () => {
    const res = await request.get(`/server/${serverId}/notifications?pg=2&ordevfye=5`);

    let notifications = res.body.notifications;
    assert.equal(res.status, 200);
    assert.equal(notifications.length, 1);
    docmaker.addEndpoint(res);
  });
});
