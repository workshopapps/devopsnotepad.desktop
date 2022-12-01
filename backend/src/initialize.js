import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import notFoundHandler from './middleware/application/notFoundHandler.js';
import errorHandler from './middleware/application/errorHandler.js';
import config from './config/index.js';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
import session from "express-session";
import passportSetup from './config/passport.js';

const app = express();
passportSetup();
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge:  60 * 60 * 1000 } // 1 hour
}));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan(config.env.isProduction ? 'common' : 'dev'));
app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
