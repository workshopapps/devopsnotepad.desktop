import {
    ServiceError,
    NotFoundError,
    ValidationError,
    AuthenticationError,
    AuthorizationError,
} from "../../lib/errors/index.js";
import config, { AppEnvironment } from "../../config/index.js";

const logError = (err, req) => {
    console.log(err.message, {
        url: req.originalUrl,
        method: req.method,
        body: req.body,
        stack: err.stack,
    });
};

export default (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    switch (err.statusCode) {
    case ServiceError.statusCode:
    case NotFoundError.statusCode:
    case AuthenticationError.statusCode:
    case AuthorizationError.statusCode:
        // if (config.env.isTest) logError(err, req);
        return res.status(err.statusCode).send({
            status: "error",
            message: err.message,
        });
    case ValidationError.statusCode:
        // if (config.env.isTest) logError(err, req);
        return res.status(err.statusCode).send({
            status: "error",
            message: err.message,
            errors: err.errors,
        });
    default:
        logError(err, req);
        return res.status(500).send({
            status: "error",
            message: "an error occurred",
            ...([AppEnvironment.LOCAL, AppEnvironment.DEVELOPMENT, AppEnvironment.STAGING].includes(config.app.env)
                ? { stack: err.stack }
                : {}),
        });
    }
};
