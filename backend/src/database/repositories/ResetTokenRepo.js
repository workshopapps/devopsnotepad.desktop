import connection from "../setup.js";

export default class ResetTokenRepo {
    static create = async (data) => {
        return await connection("tokens").insert(data);
    };

    static getTokens = async (token, userId) => {
        return connection("tokens").where("userId", userId);
    };

    static deleteExpiredTokens = async () => {
        return connection("tokens").where(connection.raw(`DATEDIFF(CURDATE(), DATE(created_at)) > 1`)).del();
    };
    
}
