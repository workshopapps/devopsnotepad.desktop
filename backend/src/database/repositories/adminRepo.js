import connection from "../setup.js";


export default class AdminRepo {
    static createContact = async (data) => {
        return await connection("contact_us").insert(data);
    };

    static getAllContacts = async () => {
        return connection.select().table("contact_us");
    };

    static getFollowUpUsers = async () => {
        return connection("contact_us").whereNull("message");
    }
}
