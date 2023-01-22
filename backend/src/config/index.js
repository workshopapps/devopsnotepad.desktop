import env from "dotenv";

env.config({ path: process.env.ENV_FILE_PATH });

export const AppEnvironment = {
    TEST: "test",
    LOCAL: "local",
    DEVELOPMENT: "development",
    STAGING: "staging",
    PRODUCTION: "production",
};

const isTestEnvironment = process.env.APP_ENV === AppEnvironment.TEST;

const config = {
    env: {
        isProduction: process.env.NODE_ENV === AppEnvironment.PRODUCTION,
        isDevelopment: process.env.NODE_ENV === AppEnvironment.DEVELOPMENT,
        isTest: process.env.NODE_ENV === AppEnvironment.TEST,
    },
    app: {
        port: +process.env.PORT,
        url: process.env.BASE_URL,
        secret: process.env.APP_SECRET
    },
    db: {
        host: process.env.DB_HOST || "localhost",
        port: +(process.env.DB_PORT || 3306),
        database: isTestEnvironment ? process.env.TEST_DB_DATABASE : process.env.DB_DATABASE,
        user: isTestEnvironment ? process.env.TEST_DB_USER : process.env.DB_USER,
        password: isTestEnvironment ? process.env.TEST_DB_PASSWORD : process.env.DB_PASSWORD,
    },
    google: {
        CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
    session: {
        secret: process.env.EXPRESS_SESSION_SECRET 
    },
    email: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        support_email_user: process.env.SUPPORT_EMAIL_USER,
        support_email_pass: process.env.SUPPORT_EMAIL_PASS,
        opspad_email_user: process.env.OPSPAD_EMAIL_USER,
        opspad_email_pass: process.env.OPSPAD_EMAIL_PASS,
    }
};
export const validateConfig = () => {
    const missingKeys = [];
    Object.entries(config).forEach(([baseKey, baseValue]) => {
        Object.entries(baseValue).forEach(([key, value]) => {
            if (value === "" || value === undefined) {
                missingKeys.push(`${baseKey}.${key}`);
            }
        });
    });
    if (missingKeys.length) {
        global.console.error(`The following configuration keys are not set: ${missingKeys.join(", ")}`);
        process.exit(1);
    }
};

validateConfig();

export default config;
