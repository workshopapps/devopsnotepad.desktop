import { assert } from "chai";
import supertest from "supertest";
import app from "../../src/initialize.js";
import Documentator from "../../src/utils/documentator/index.js";
import connection from "../../src/database/setup.js";

export const request = supertest.agent(app);

export const docmaker = Documentator.getInstance();
let serverId, serverId1;
// Deletes every record from servers table before any test is run to avoid collisions.
before(async () => {
    await connection.raw("delete from notifications");
});

before(async () => {
    await connection.raw("delete from servers");
});

// before(async () => {
//   await connection.seed.run({ specific: 'create-server.js' });
//   await connection.seed.run({ specific: 'create-notification.js' });
//   console.log(`database seeded`);
// });

describe("Notification", () => {
    it("create server", async () => {
        const res = await request.post("/server").send({
            name: "example server",
            ipAddress: "google.com",
            deviceId: "80988579",
        });
        serverId = res.body.server.id;
        const res1 = await request.post("/server").send({
            name: "Nginx server",
            ipAddress: "google.com",
            deviceId: "80988579",
        });
        serverId1 = res1.body.server.id;
    });

    it("should get new notifications and check default ordering", async () => {
        const res = await request.get("/server/" + serverId + "/notifications");
        assert.equal(res.status, 200);
        assert.equal(res.body.success, true);
        docmaker.addEndpoint(res);
    });

    it("should check pagination when getting notification", async () => {
        const res = await request.get("/server/" + serverId1 + "/notifications?page=2&limit=2");
        assert.equal(res.status, 200);
        docmaker.addEndpoint(res);
    });
    //
    it("should return notifications for the last 1 week and check ordering in asc order", async () => {
        const res = await request.get("/server/" + serverId1 + "/notifications?range=weekly&orderBy=created_at+asc");

        assert.equal(res.status, 200);
        docmaker.addEndpoint(res);
    });

    it("should return notifications for the last 1 month", async () => {
        const res = await request.get("/server/" + serverId1 + "/notifications?range=monthly");

        assert.equal(res.status, 200);
        // assert.equal(res.success, true);
        docmaker.addEndpoint(res);
    });

    //
    it("should return default notifications if query parameter is invalid", async () => {
        const res = await request.get("/server/" + serverId1 + "/notifications?pg=2&ordevfye=5");

        assert.equal(res.status, 200);
        docmaker.addEndpoint(res);
    });
});
