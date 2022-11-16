import connection from "../setup.js";

export default class ServerRepo {
    static getAllServers = async () => {
        return connection.select().table("servers");
    };

    static getServerById = async (id) => {
        return connection("servers").where("id", id).first();
    };

    static getServerByName = async (name) => {
        return connection("servers").where("name", name).first();
    };

    static create = async (data) => {
        return await connection("servers").insert(data);
    };

    static updateById = async (id, data) => {
        return await connection("servers").where("id", id).update(data);
    };

    static deleteById = async (id) => {
        return await connection("servers").where("id", id).del();
    };
}
