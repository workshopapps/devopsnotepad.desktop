import jwt from "jsonwebtoken";

export default async function authenticate(req, res, next) {
    try{
        if (req.cookies["connect.sid"]) {
            return next();
        }
        let token;
        if ( req.headers.authorization){
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).send("No token found");
        } 
  
        else {
            jwt.verify(token, process.env.JWT_SECRET, (err, id, email) => {
                if (err) {
                    res.status(403).send("invalid token");
                }
                req.user = {
                    id: id,
                    email: email
                };
                next();
            });
        }
    } catch (err) {
        next(err);
    }
}