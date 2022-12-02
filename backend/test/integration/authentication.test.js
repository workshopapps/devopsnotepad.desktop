import { assert } from "chai";
import supertest from "supertest";
import app from "../../src/initialize.js";
import Documentator from "../../src/utils/documentator/index.js";
import connection from "../../src/database/setup.js";
import UserRepo from "../../src/database/repositories/UserRepo.js";

export const request = supertest.agent(app);

export const docmaker = Documentator.getInstance();


beforeEach(async () => {
    // Deletes every records table before any test is run to avoid collisions.
    await connection.raw("delete from users");
});

describe("user authentication", () => {
    it("should create a new user", async () => {
        const res = await request.post("/auth/signup").set("Content-Type", "application/json").send({
            name: "Oluseyi Adeegbe",
            email: "examplemail@gmail.com",
            password: "@password1",
        });
     
        assert.equal(res.status, 201);
        assert.equal(Object.keys(res.body.user).length, 3);
        assert.notEqual("@password1", res.body.user.password);
        assert.include(res.body.message, "signup successful");
        assert.include(res.body.user.email, "examplemail@gmail.com");
        assert.include(res.body.user.name, "Oluseyi Adeegbe");
        docmaker.addEndpoint(res);
    });

    it("should login a user", async () => {
        await request.post("/auth/signup").set("Content-Type", "application/json").send({
            id: 5,
            name: "Oluseyi Adeegbe",
            email: "examplemail@gmail.com",
            password: "@password1",
        });
        const id = 5;
        await UserRepo.updateById(id, { email_verified: "true" });

        const res2 = await request.post("/auth/login").set("Content-Type", "application/json").send({
            email: "ExaMpleMail@gmail.com",
            password: "@password1",
        }); 
     
        assert.equal(res2.status, 200);
        assert.exists(res2.body.token);
        assert.equal(Object.keys(res2.body.user).length, 6);
        assert.include(res2.body.message, "Logged in Successfully");
        assert.include(res2.body.user.email, "examplemail@gmail.com");  //check if emailtoLowerCase is working
        assert.include(res2.body.user.name, "Oluseyi Adeegbe");
        docmaker.addEndpoint(res2);
    });
});
