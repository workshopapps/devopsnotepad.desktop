import { assert, expect } from 'chai';
import supertest from 'supertest';
import app from '../../src/initialize.js';
import Documentator from '../../src/utils/documentator/index.js';
import connection from '../../src/database/setup.js';

export const request = supertest.agent(app);

export const docmaker = Documentator.getInstance();

let serverId;
let serverId_Notification_test;

//Deletes every record from servers table before any test is run to avoid collisions.
before(async () => {
  await connection.raw('delete from servers');
});

describe('Server', () => {
  //2 Tests for Create server endpoint
  it('should create new server', async () => {
    const res = await request.post('/server').send({
      name: 'example server',
      ipAddress: 'google.com',
      deviceId: 80988579,
    });

    serverId = res.body.server.id;
    assert.equal(res.status, 200);
    assert.include(res.body.message, 'server created successfully');
    docmaker.addEndpoint(res);
  });
  it('should throw error when creating a server with an existing name', async () => {
    const res = await request.post('/server').send({
      name: 'example server',
      ipAddress: 'google.com',
    });
    
       assert.equal(res.status, 400);
    assert.include(res.body.message, 'Server already exists');
  });

    //2 Tests for Get All Servers by Device
    it("should get all servers added on a particular device", async () => {
        const res = await request.get("/server?device=80988579");
        assert.equal(res.status, 200);
        docmaker.addEndpoint(res);
    });

    //2 Tests for Update Server Endpoints
    it("should update server", async () => {
        const res = await request.patch("/server").send({
            id: serverId,
            name: "updated server name",
          });
    assert.equal(res.status, 200);
    assert.include(res.body.message, 'Server updated successfully');
    docmaker.addEndpoint(res);
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

  it('should throw error if there is no server from the requesting device', async () => {
    const res = await request.get('/server?device=00102939');
    assert.equal(res.status, 404);
  });

  it('should not update server if server is not found', async () => {
    const res = await request.patch('/server').send({
      id: '33344knkn323j5kln23l4n3l4n',
      name: 'updated server name',
    });

    assert.equal(res.status, 404);
    assert.include(res.body.message, 'Server does not exist');
  });

  it('Should delete a server from an array of existing servers', async () => {
    const res = await request.post('/server/delete').send({
      serverIds: [serverId],
    });
    expect(res.status).to.equal(200);
    expect(res.body.message).to.include('servers deleted successfully');
    docmaker.addEndpoint(res);
  });

  it('Should confirm if server was deleted successfully', async () => {
    const res = await request.get('/server/' + serverId).send();
    expect(res.status).to.equal(404);
    console.log(res.body);
  });

  it ("Should subscribe for push notification for a server", async () => {
    
    const newServerRes = await request.post('/server').send({
      name: 'test server',
      ipAddress: 'www.google.com.ng',
      deviceId: 80988579,
      id: 100
    });

    serverId_Notification_test = newServerRes.body.server.id;

    const res = await request.post(`/server/${serverId_Notification_test}/subscribe`).send({
        registrationToken: "670ca230-67e2-11ed-a65b2-1458d0028583"
    });

    assert.equal(res.status, 200);
    assert.include(res.body.message, "Subscription successful")
    docmaker.addEndpoint(res);

  })

  it ("Should fail to subscribe to push notification with no registration token", async () => {
    const res = await request.post(`/server/${serverId_Notification_test}/subscribe`).send({
        registrationToken: ''
    });

    assert.equal(res.status, 400);
  })

  it ("Should fail to subscribe for push notificaton for server with incorrect id", async () => {
    let wrong_server_id = '670ca230-67e2-11ed-a65b2-1458d0028583';
    const res = await request.post(`/server/${wrong_server_id}/subscribe`).send({
        registrationToken:"670ca230-67e2-11ed-a65b2-1458d0028583"
    });

    assert.equal(res.status, 404);
  })

});
