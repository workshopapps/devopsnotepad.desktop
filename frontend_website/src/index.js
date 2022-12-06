import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import UserContextProvider from './store/UserContext';
import { ServerProvider } from './Component/Context/ServerContext';

process.env.NODE_ENV === 'production' && Sentry.init({
  dsn: "https://3d6b30e3e44e45d388fb656e5ac8d654@o4504281385861120.ingest.sentry.io/4504284137455616",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <UserContextProvider>
          <ServerProvider>
            <App />
          </ServerProvider>
        </UserContextProvider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
