import connection from "../setup.js";

export default class UserRepo {
    static create = async (data) => {
        return await connection("users").insert(data);
    };

    static getUserByEmail = async (email) => {
        return connection("users").where("email", email).first();
    };

    static getUserById = async (id) => {
        return connection("users").where("id", id).first();
    }

    static updateById = async (id, data) => {
        return await connection("users").where("id", id).update(data);
    };

    static updatePasswordById = async (id, password) => {
        return await connection("users").where("id", id).update("password", password);    
    };
    static removeUserByEmail = async (email) => {
        return await connection("users").where("email", email).delete()
    };
}
