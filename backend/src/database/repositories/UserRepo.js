import connection from "../setup.js";

export default class UserRepo {
    static createUser = async (data) => {
        return await connection("users").insert(data);
    };
}
