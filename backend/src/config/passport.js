import Passport from "passport-google-oauth20";
import { google } from "./index.js";
import passport from "passport";
import { getAuthUser, create } from "../services/user/authService.js";
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
                clientID: google.CLIENT_ID,
                clientSecret: google.CLIENT_SECRET,
                callbackURL: "/auth/google/callback",
                scope: ["profile", "email"],
            },
            async (accessToken, refreshToken, profile, done) => {
                const data = profile._json;
                const newUser = {
                    name: data.name,
                    email: data.email,
                };
                console.log(data);
                let user = await getAuthUser(data.email);
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
