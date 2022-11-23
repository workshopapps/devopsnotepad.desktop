import { assert } from "chai";
import supertest from "supertest";
import app from "../../src/initialize.js";
import Documentator from "../../src/utils/documentator/index.js";
import connection from "../../src/database/setup.js";
<<<<<<< HEAD
import ServerRepo from "../../src/database/repositories/ServerRepo.js";
=======
>>>>>>> 0840880f6416fea392b33501883bb1def77c9b78

export const request = supertest.agent(app);

export const docmaker = Documentator.getInstance();

<<<<<<< HEAD
const getNotificationByLog = async (log) => {
    return connection("notifications").where("log", log).first();
};

let notificationId;
export let serverId = '';
const params = {
    name: 'example server',
    ipAddress: 'google.com',
    deviceId: 80988579,
}

before(async () => {
    // Deletes every records table before any test is run to avoid collisions.
    await connection.raw("delete from notifications");
    await connection.raw("delete from servers");

    await ServerRepo.create(params);
    const server = await ServerRepo.getServerByName(params.name, params.deviceId);
    serverId = server.id;
});


describe("Notification", () => {
    it("should create new notification for a server", async () => {
        const res = await request
            .post("/server/" + serverId + "/notifications")
            .send({
                log: "add data points",
            });

        // const noti = await getNotificationByLog("add data points")
        // notificationId = noti.id
        assert.equal(res.status, 200);
        docmaker.addEndpoint(res);
    });

    it("should throw error when creating a notification with an invalid server_id", async () => {
        const res = await request
            .post(`/server/fksldflkdsfkdsjks/notifications`)
            .send({
                log: "add data points"
            });

        assert.equal(res.status, 400);
        assert.include(res.body.message, "An error occured while creating new logs, server do not exist");
    });

    it('should throw error if there is no server from the requesting device', async () => {
        const res = await request.get('/server?device=00102939');
        assert.equal(res.status, 404);
    });

    it("should get new notifications and check default ordering", async () => {
        const res = await request.get(`/server/${serverId}/notifications`);

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 1);
        assert.equal(Object.keys(notifications[0]).length, 5);
=======

// Deletes every record from servers table before any test is run to avoid collisions.
before(async () => {
    await connection.raw("delete from notifications");
});

before(async () => {
    await connection.raw("delete from servers");
});

before(async () => {
    await connection.seed.run({ specific: "create-server.js" });
    await connection.seed.run({ specific: "create-notification.js" });
    console.log(`database seeded`);
});



describe("Notification", () => {
    
    it("should get new notifications and check default ordering", async () => {
        const res = await request.get("/server/2/notifications");

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 4);
        assert.equal(Object.keys(notifications[0]).length, 5);
        assert.include(notifications[0].notificationId, 1);
>>>>>>> 0840880f6416fea392b33501883bb1def77c9b78
        docmaker.addEndpoint(res);
    });

    it("should check pagination when getting notification", async () => {
<<<<<<< HEAD
        const res = await request.get(`/server/${serverId}/notifications?page=1&limit=2`);

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 1);
        docmaker.addEndpoint(res);
    });

    it("should return notifications for the last 1 week and check ordering in asc order", async () => {
        const res = await request.get(`/server/${serverId}/notifications?range=weekly&orderBy=created_at+asc`);

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 1);
        docmaker.addEndpoint(res);
    });

    it("should return notifications for the last 1 month", async () => {
        const res = await request.get(`/server/${serverId}/notifications?range=monthly`);

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 1);
        docmaker.addEndpoint(res);
    });

    it("should return default notifications if query parameter is invalid", async () => {
        const res = await request.get(`/server/${serverId}/notifications?pg=2&ordevfye=5`);

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 1);
=======
        const res = await request.get("/server/2/notifications?page=2&limit=2");

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 2);
        assert.include(notifications[0].notificationId, 4); 
        docmaker.addEndpoint(res);   
    });

    it("should return notifications for the last 1 week and check ordering in asc order", async () => {
        const res = await request.get("/server/2/notifications?range=weekly&orderBy=created_at+asc");

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 3);
        assert.include(notifications[0].notificationId, 4);  
        docmaker.addEndpoint(res);  
    });

    it("should return notifications for the last 1 month", async () => {
        const res = await request.get("/server/2/notifications?range=monthly");

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 4);
        assert.include(notifications[3].notificationId, 6);    
        docmaker.addEndpoint(res);
    });

    it("should return empty notification", async () => {
        const res = await request.get("/server/3/notifications");

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 0);
        docmaker.addEndpoint(res);  
    });

    it("should return default notifications if query parameter is invalid", async () => {
        const res = await request.get("/server/2/notifications?pg=2&ordevfye=5");

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 4);  
>>>>>>> 0840880f6416fea392b33501883bb1def77c9b78
        docmaker.addEndpoint(res);
    });
});


