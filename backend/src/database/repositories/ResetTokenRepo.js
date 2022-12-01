import connection from "../setup.js";

export default class ResetTokenRepo {
    static create = async (data) => {
        return await connection("tokens").insert(data);
    };

    static getToken = async (token, userId) => {
        return connection("tokens").where("userId", userId).first();
    };

    static deleteToken = async (token) => {
        return await connection("tokens").where("token", token).del();
    };

    
}
