import ContactUsRepo from "../../database/repositories/contactUsRepo.js";
import papa from "papaparse";

export default async function get () {
    const followUpUsers = await ContactUsRepo.getFollowUpUsers();

    const config = {
        header: true,
        delimiter: ","
    }

    const csv = papa.unparse(followUpUsers, config);
    return csv;
}