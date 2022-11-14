import http from 'http';
import stoppable from 'stoppable';
import {validateConfig} from './config/index.js';
import {migrate} from './database/setup.js';


const startServer = async () => {
    (global).isStartingUp = true;

    const app = (await import('./initialize.js')).default;
    const server = stoppable(http.createServer(app));

    server.listen(5000, () => {
        console.log(`! Server Started and Listening on Port: ${5000} with PID: ${process.pid}`);
        (global).isStartingUp = false;
    });

    process.on('SIGTERM', async () => {
        (global).isShuttingDown = true;

        console.log('Starting graceful server shutdown');

        // wait for readiness probe to start failing before stopping the server
        await new Promise((resolve) => setTimeout(resolve, 15 * 1000));

        server.stop(() => {
            console.log('Graceful server shutdown completed');
            setTimeout(() => process.exit(0), 1000);
        });
    });
};

const start = async () => {
    try {
        await migrate();
        validateConfig();
        await startServer();
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

export default start();
