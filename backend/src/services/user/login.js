import UserRepo from "../../database/repositories/UserRepo.js";
import bcrypt from "bcrypt";
import { generateJWTToken } from "../../utils/index.js";

export default async function login(body, req, res) {

    body.email = body.email.toLowerCase();

    const user = await UserRepo.getUserByEmail(body.email);
 
    if (!user) {
        return res.status(404).send({message: "Email or password incorrect"});
    }
    
    const comparePassword = await bcrypt.compare(body.password, user.password);
  
    if (!comparePassword) {
        return res.status(400).send({message: "Email or password incorrect"}); 
    }

    const loggedInUser = {
        message: "A verification link has been sent to your e-mail. Kindly verify to complete registration",
        user,
    };
    return loggedInUser;
}