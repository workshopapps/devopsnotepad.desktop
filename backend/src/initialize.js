import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import notFoundHandler from './middleware/application/notFoundHandler.js';
import errorHandler from './middleware/application/errorHandler.js';
import config from './config/index.js';
import routes from './routes/index.js';
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import passportSetup from './config/passport.js';
import session from 'express-session';

const app = express();

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
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['src/routes/swaggerDocs.js'],
};

const specs = swaggerJsDoc(options);
//setting up swagger doc
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

// app.get('/', (req, res) => {
//   res.send("<button><a href='/auth/google'>Login With Google</a></button>")
// });

passportSetup();

app.use(helmet());
app.set('trust proxy', true);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: config.session.secret,
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
