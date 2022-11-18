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

describe("Server", () => {
    //2 Tests for Create server endpoint
    it("should create new server", async () => {
        const res = await request.post("/server").send({
            name: "example server",
            ipAddress: "google.com",
            device_id: 80988579,
            id: "8392029hbdvyw798-88ehe8-82992",
        });

        serverId = res.body.server.id;

        assert.equal(res.status, 200);
        docmaker.addEndpoint(res);
    });

    it("should throw error when creating a server with an existing name", async () => {
        const res = await request.post("/server").send({
            name: "example server",
            ipAddress: "google.com",
            deviceId: "3e4r5677g",
        });

        assert.equal(res.status, 400);
        assert.include(res.body.message, "Server already exists");
    });

    //2 Tests for Get All Servers by Device
    it("should get all servers added on a particular device", async () => {
        const res = await request.get("/server?device=80988579");
        assert.equal(res.status, 200);
    });

    it("should throw error if there is no server from the requesting device", async () => {
        const res = await request.get("/server?device=00102939");
        assert.equal(res.status, 404);
    });

    //2 Tests for Get single server by serverId
    it("should get server with requested serverId param", async () => {
        const res = await request.get("/server/8392029hbdvyw798-88ehe8-82992");
        assert.equal(res.status, 200);
    });

    it("should throw error if there is no server with that id", async () => {
        const res = await request.get("/server/83930dbhduu3i3");
        assert.equal(res.status, 404);
    });

    //2 Tests for Update Server Endpoints
    it("should update server", async () => {
        const res = await request.patch("/server").send({
            id: serverId,
            name: "updated server name",
        });

        assert.equal(res.status, 200);
        assert.include(res.body.message, "Server updated successfully");
        docmaker.addEndpoint(res);
    });

    it("should not update server if server is not found", async () => {
        const res = await request.patch("/server").send({
            id: "33344knkn323j5kln23l4n3l4n",
            name: "updated server name",
        });

        assert.equal(res.status, 404);
        assert.include(res.body.message, "Server does not exist");
    });
});
