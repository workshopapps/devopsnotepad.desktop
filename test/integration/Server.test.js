import {assert} from 'chai';
import supertest from 'supertest';
import app from '../../src/initialize.js';
import Documentator from '../../src/utils/documentator/index.js';
import connection from '../../src/database/setup.js';

export const request = supertest.agent(app);

const docmaker = Documentator.getInstance();

//Deletes every record from servers table before any test is run to avoid collisions.
before(async () => {
    await connection.raw("delete from servers");
})

describe('Server', () => {
    it('should create new server', async () => {
      const res = await request
        .post('/server')
        .send({
          name: 'example server',
          ipAddress: 'google.com',
        });

      assert.equal(res.status, 200);
      docmaker.addEndpoint(res);
    });

    it('should throw error when creating a server with an existing name', async () => {
      const res = await request
        .post('/server')
        .send({
          name: 'example server',
          ipAddress: 'google.com',
        });

      assert.equal(res.status, 400);
      assert.include(res.body.message, 'Server already exists');
    });
  });