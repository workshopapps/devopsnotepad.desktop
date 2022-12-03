import jwt from "jsonwebtoken";
import { assert } from "chai";

it("generate json web token", async () => {
    const payload = { id: "60gfuegjeih3i83yr82jf", email: "john_doe@gmail.com"};
    const token =  jwt.sign(payload, "hrfirh43ty4hi43");
    assert.exists(token);
    assert.isAbove(token.length, 10);
    assert.equal(token.split(".").length, 3);
});

it("verify json web token", async () => {
    const payload = { id: "60gfuegjeih3i83yr82jf", email: "john_doe@gmail.com"};
    const token =  jwt.sign(payload, "ihwrif348yrgj39pu");
    const decoded =  jwt.decode(token.toString());
    assert.exists(decoded);
    assert.equal(decoded.id, payload.id);
    assert.equal(decoded.email, payload.email);

});