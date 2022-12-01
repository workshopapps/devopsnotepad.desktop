import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import notFoundHandler from './middleware/application/notFoundHandler.js';
import errorHandler from './middleware/application/errorHandler.js';
import config from './config/index.js';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
import session from "express-session";

const app = express();

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
app.use(morgan(config.env.isProduction ? 'common' : 'dev'));
app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
