import UserRepo from "../../database/repositories/UserRepo.js";

export default async function login(body) {

    body.email = body.email.toLowerCase();
    
    const user = await UserRepo.getUserByEmail(body.email);
    return user;
}