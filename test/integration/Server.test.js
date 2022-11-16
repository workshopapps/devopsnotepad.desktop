import { assert, expect } from "chai";
import supertest from "supertest";
import app from "../../src/initialize.js";
import Documentator from "../../src/utils/documentator/index.js";
import connection from "../../src/database/setup.js";

export const request = supertest.agent(app);

export const docmaker = Documentator.getInstance();

let userId;

//Deletes every record from servers table before any test is run to avoid collisions.
before(async () => {
  await connection.raw("delete from servers");
});

describe("Server", () => {
  it("should create new server", async () => {
    const res = await request.post("/server").send({
      name: "example server",
      ipAddress: "google.com",
    });

    userId = res.body.server.id;

    assert.equal(res.status, 200);
    docmaker.addEndpoint(res);
  });

  it("should throw error when creating a server with an existing name", async () => {
    const res = await request.post("/server").send({
      name: "example server",
      ipAddress: "google.com",
    });

    assert.equal(res.status, 400);
    assert.include(res.body.message, "Server already exists");
  });

  it("should update server", async () => {
    const res = await request.patch("/server").send({
      id: userId,
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
  it("Should delete an existing server", async () => {
    const res = await request.delete("/server/" + userId).send();

    expect(res.status).to.equal(200);
    expect(res.body.message).to.include("server deleted successfully");
    docmaker.addEndpoint(res);
  });
  it("Should delete an array existing servers", async () => {
    const data = await request.post("/server").send({
      name: "Apache server",
      ipAddress: "apache.com",
    });
    let new_id = data.body.server.id;
    const res = await request.post("/server/remove_all").send({
      serverIds: [new_id],
    });

    expect(res.status).to.equal(200);
    expect(res.body.message).to.include("servers deleted successfully");
    docmaker.addEndpoint(res);
  });
});
