import UserRepo from "../../database/repositories/UserRepo.js";
import bcrypt from "bcrypt";
import signJWT from "../../utils/jwthelper.js";

export default async function login(body, req, res) {

    body.email = body.email.toLowerCase();

    const user = await UserRepo.getUserByEmail(body.email);
 
    if (!user) {
        return res.status(400).send({message: "email or password invalid"});
    }
    
    const comparePassword = await bcrypt.compare(body.password, user.password);
  
    if (!comparePassword) {
        return res.status(400).send({message: "invalid password"}); 
    }

    if (user.email_verified==="false") {
        return res.status(401).send({message: "Pls, kindly check your e-mail to complete your registration"}); 
    }

    delete user.password;

    const token = await signJWT(user);
    const loggedInUser = {
        user: user,
        token: token,
    };
    return loggedInUser;
}
