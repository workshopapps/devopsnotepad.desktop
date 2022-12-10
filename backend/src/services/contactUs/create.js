import ContactRepo from "../../database/repositories/contactUsRepo";
import { ValidationError } from "../../lib/errors";

export default async function create(body){

    // const error = await 

    await ContactRepo.create(body);

    return {
        message: "successfully sent"
    };
}