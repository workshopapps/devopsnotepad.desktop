import create from "../services/user/create.js";
import login from "../services/user/login.js";
import bcrypt from "bcrypt";
import signJWT from "../utils/jwthelper.js";
export default class AuthController {
    static signup = async (req, res, next) => {
        try {
            await create(req.body);

            res.status(201).json({
                success: true,
                message: "signup successful",
                user: req.body
            });
        } catch (error) {
            next(error);
        }
    };

    static login = async (req, res, next) => {
        const body = req.body;
        try {
            const user = await login(body); 

            if (!user) {
                return res.send({
                    message: "User not found" 
                });
            }
  
            const comparePassword = await bcrypt.compare(body.password, user.password);
  
            if (!comparePassword) {
                return res.send({ 
                    message: "Wrong Password" 
                });
            }

            delete user.password;
        
            req.session.user = user;
            req.session.authorized = true;

            const token = await signJWT(user); 

            return res.send({ 
                message: "Logged in Successfully",
                user: user,
                token: token

            });                     
        } catch (error) {
            next(error);
        }
    };

    static logoutUser = async (req, res, next) => {
        try {
            res.clearCookie("connect.sid");
            res.status(200).send("logout successful");
        } catch (error) {
            next(error);
        }
    };
    
  static loginStatus = async (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: 'Login was successful',
        user: req.user,
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Not Authenticated',
      });
    }
  };
  static loginFailed = async (req, res) => {
    res.status(401).json({
      success: false,
      message: 'Not Authenticated',
    });
  };
  static logout = async (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ success: true, message: 'Logout Successful' });
    });
  };
}
