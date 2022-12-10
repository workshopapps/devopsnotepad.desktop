import ContactRepo from "../../database/repositories/contactUsRepo.js";

export default async function create(body){
    await ContactRepo.create(body);

    return { message: "successfully sent" };
}