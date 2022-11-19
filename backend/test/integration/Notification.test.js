import { assert } from "chai";
import supertest from "supertest";
import app from "../../src/initialize.js";
import Documentator from "../../src/utils/documentator/index.js";
import connection from "../../src/database/setup.js";

export const request = supertest.agent(app);

export const docmaker = Documentator.getInstance();

let serverId;

//Deletes every record from servers table before any test is run to avoid collisions.
before(async () => {
    await connection.raw("delete from servers");
});

describe("Notification", () => {
    //2 Tests for Create server endpoint
    it('should create new server', async () => {
      const res = await request.post('/server').send({
        name: 'example server',
        ipAddress: 'google.com',
        deviceId: 80988579,
        id: '8392029hbdvyw798-88ehe8-82992',
      });

      serverId = res.body.server.id;
    });

    it('should throw error when creating a server with an existing name', async () => {
      const res = await request.post('/server').send({
        name: 'example server',
        ipAddress: 'google.com',
      });

      assert.equal(res.status, 400);
      assert.include(res.body.message, 'Server already exists');
    });

    //test for notifications
    it("should create new notification for a server", async () => {
        const res = await request
            .post("/server/" + serverId + "/notifications")
            .send({
                serverId,
                log: "add data points",
            });

        assert.equal(res.status, 200);
        docmaker.addEndpoint(res);
    });

    it("should throw error when creating a notification with an invalid server_id", async () => {
        const res = await request
            .post("/server/sdsdds/notifications")
            .send({
                log: "add data points"
            });

        assert.equal(res.status, 400);
        assert.include(res.body.message, "An error occured while creating new logs, server do not exist");
    });
});