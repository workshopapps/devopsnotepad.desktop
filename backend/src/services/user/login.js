import UserRepo from "../../database/repositories/UserRepo.js";
import bcrypt from "bcrypt";
// import { generateJWTToken } from "../../utils/index.js";

export default async function login(body, req, res) {

    body.email = body.email.toLowerCase();

    const user = await UserRepo.getUserByEmail(body.email);

    if (!user) {
        return res.status(404).send({ message: "Email or password incorrect" });
    }

    const comparePassword = await bcrypt.compare(body.password, user.password);

    if (!comparePassword) {
        return res.status(400).send({ message: "Email or password incorrect" });
    }

    if (user.email_verified===0 && user.created_at>=new Date("2022-12-10T00:00:00")) {
        return res.status(401).send({ message: "Email not verified" });
    }

    return {
        user,
    };
}