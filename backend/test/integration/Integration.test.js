import { assert } from "chai";
import supertest from "supertest";
import app from "../../src/initialize.js";
import Documentator from "../../src/utils/documentator/index.js";
import connection from "../../src/database/setup.js";

export const request = supertest.agent(app);

export const docmaker = Documentator.getInstance();


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
        assert.equal(Object.keys(notifications[0]).length, 4);
        assert.include(notifications[0].id, 1);
        docmaker.addEndpoint(res);
    });

    it("should check pagination when getting notification", async () => {
        const res = await request.get("/server/2/notifications?page=2&limit=2");

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 2);
        assert.include(notifications[0].id, 4); 
        docmaker.addEndpoint(res);   
    });

    it("should return notifications for the last 1 week and check ordering in asc order", async () => {
        const res = await request.get("/server/2/notifications?range=weekly&orderBy=createdAt+asc");

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 3);
        assert.include(notifications[0].id, 4);  
        docmaker.addEndpoint(res);  
    });

    it("should return notifications for the last 1 month", async () => {
        const res = await request.get("/server/2/notifications?range=monthly");

        let notifications = res.body.notifications;
        assert.equal(res.status, 200);
        assert.equal(notifications.length, 4);
        assert.include(notifications[3].id, 6);    
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
        docmaker.addEndpoint(res);
    });
});


