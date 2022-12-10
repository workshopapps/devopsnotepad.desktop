import express from 'express';
import cors from 'cors';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import helmet from 'helmet';
import morgan from 'morgan';
import notFoundHandler from './middleware/application/notFoundHandler.js';
import errorHandler from './middleware/application/errorHandler.js';
import config from './config/index.js';
import routes from './routes/index.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passportSetup from './config/passport.js';
import path from 'path';
import { fileURLToPath } from 'url';
import MySqlStore from 'express-mysql-session';
import { development } from '../knexfile.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

Sentry.init({
  dsn: 'https://03376006cefa482ca1468b11591c084c@o4504281385861120.ingest.sentry.io/4504292152836096',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

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
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
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

app.use(Sentry.Handlers.errorHandler());

passportSetup();

const store = MySqlStore(session);
const sessionStore = new store(development.connection);

app.use(
  session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { expires: 60 * 60 * 1000 }, // 1 hour
  })
);

app.use(cookieParser());
app.use(helmet());
app.set('trust proxy', true);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan(config.env.isProduction ? 'common' : 'dev'));
app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
