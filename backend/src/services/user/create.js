import UserRepo from "../../database/repositories/UserRepo.js";
import bcrypt from "bcrypt";
import env from 'dotenv';
env.config({ path: process.env.ENV_FILE_PATH });

export default async function create(body) {
    body.email = body.email.toLowerCase();
    
    //hash password
    const hash =  await bcrypt.hash(body.password, Number(process.env.BCRYPT_SALT));
    body.password = hash;

    await UserRepo.create(body);
}