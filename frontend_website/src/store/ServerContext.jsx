import React, { useState } from 'react';
import { useCallback } from 'react';

// Creating an app wide state store using the context API
export const ServerContext = React.createContext({
  servers: [],
  addServers: () => { },
});

// Creating a component that will provide the context.
const ServerContextProvider = (props) => {
  // Managing states
  const [servers, setServers] = useState([]);

  // Functions to updates states. useCallback ensures that the functions are memoized
  const addServers = useCallback(async (data) => {
    const formattedServers = data.servers
    console.log(formattedServers, 'formatted servers');
    setServers(formattedServers);
  }, []);

  // Data that is available in app wide state
  const data = {
    servers,
    addServers,
  };

  console.log(servers)

  return (
    <ServerContext.Provider value={data}>
      {props.children}
    </ServerContext.Provider>
  );
};
export default ServerContextProvider;
