import connection from "../setup.js";
import APIFeatures from "../../utils/apiFeatures.js";


export default class UserRepo {
    static create = async (data) => {
        return await connection("contact_us").insert(data);
    };

    static getContacts = async (query) => {
        const dbQuery = connection("notifications");
        return new APIFeatures(dbQuery, query).paginate().sort().query;
    };
}
