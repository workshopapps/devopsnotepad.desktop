import connection from "../setup.js";

export default class EmailVerificationTokenRepo {
    static create = async (data) => {
        return await connection("tokens").insert(data);
    };

    static getToken = async (userId) => {
        return connection("tokens").where("userId", userId).first();
    };

    static deleteExpiredTokens = async () => {
        return connection("tokens").where(connection.raw(`DATEDIFF(CURDATE(), DATE(created_at)) > 1`)).del();
    };
    
}