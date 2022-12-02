import connection from "../setup.js";

export default class ResetTokenRepo {
    static create = async (data) => {
        return await connection("tokens").insert(data);
    };

    static getToken = async (token, userId) => {
        return connection("tokens").where("userId", userId).first();
    };

    static deleteExpiredTokens = async (currentTime) => {
        return await connection("tokens").where("expires_at", "<", currentTime).del();
    };

    
}
