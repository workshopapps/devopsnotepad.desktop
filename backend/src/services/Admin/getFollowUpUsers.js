import AdminRepo from "../../database/repositories/adminRepo.js";
import papa from "papaparse";

export default async function get () {
    const followUpUsers = await AdminRepo.getFollowUpUsers();

    const config = {
        header: true,
        delimiter: ","
    }

    const csv = papa.unparse(followUpUsers, config);

    return csv;
}