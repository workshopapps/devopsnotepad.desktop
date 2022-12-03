import Passport from "passport-google-oauth20";
import UserRepo from '../database/repositories/UserRepo.js';
import config from "./index.js";
import passport from "passport";
import {create } from "../services/user/authService.js";
const GoogleStrategy = Passport.Strategy;

export default () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(
        new GoogleStrategy(
            {
                clientID: config.google.CLIENT_ID,
                clientSecret: config.google.CLIENT_SECRET,
                callbackURL: "/auth/google/callback",
                scope: ["profile", "email"],
            },
            async (accessToken, refreshToken, profile, done) => {
                const data = profile._json;
                const newUser = {
                    name: data.name,
                    email: data.email,
                    email_verified: data.email_verified
                };
                let user = await UserRepo.getUserByEmail(data.email);
                if (user) {
                    done(null, user);
                } else {
                    user = await create(newUser);
                    done(null, user);
                }
            }
        )
    );
};
