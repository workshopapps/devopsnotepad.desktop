import ContactUsRepo from "../../database/repositories/contactUsRepo.js";
import papa from "papaparse";

export default async function contact () {
    const contacts = await ContactUsRepo.getAllContacts();
    const config = {
        header: true,
        delimiter: ","
    }

    const csv = papa.unparse(contacts, config);
    return csv;
}