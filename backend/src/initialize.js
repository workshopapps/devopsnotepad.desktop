import express from 'express';
import cors from 'cors';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import notFoundHandler from './middleware/application/notFoundHandler.js';
import errorHandler from './middleware/application/errorHandler.js';
import config from './config/index.js';
import routes from './routes/index.js';
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import cookieParser from 'cookie-parser';
import session from "express-session";
import passportSetup from './config/passport.js';
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

Sentry.init({
  dsn: "https://2e6682078ed644e291c89ead3ac7a40c@o4504281385861120.ingest.sentry.io/4504282688520193",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

setTimeout(() => {
  try {
    foo();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);

//options object for swaggerjs
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Opspad',
      version: '1.0.0',
      description: 'An api for opspad',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    servers: [
      {
        //update to production url
        url: config.app.url,
      },
    ],
  },
  apis: [`${__dirname}/routes/swaggerDocs.js`],
};

const specs = swaggerJsDoc(options);
//setting up swagger doc
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.get('/', (req, res) => {
  res.send("<button><a href='/auth/google'>Login With Google</a></button>")
});

passportSetup();
app.use(session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge:  60 * 60 * 1000 } // 1 hour
}));
app.use(cookieParser());
app.use(helmet());
app.set('trust proxy', true);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan(config.env.isProduction ? 'common' : 'dev'));
app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
