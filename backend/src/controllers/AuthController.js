import config from "../config/index.js";
import { generateJWTToken } from "../utils/index.js";

export default class AuthController {
  static loginStatus = async (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: 'Login was successful',
        user: req.user,
        token: await generateJWTToken(req.user)
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
