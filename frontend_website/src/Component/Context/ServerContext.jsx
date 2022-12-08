import { createContext, useMemo, useState, useEffect } from 'react';

const ServerContext = createContext();

export function ServerProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [servers, setServers] = useState([]);
  const [success, setSuccess] = useState(false);
  // const [error, setError] = useState('');

  // Get all servers
  async function getServers() {
    const data = (await JSON.parse(localStorage.getItem('servers')))
      ? JSON.parse(localStorage.getItem('servers'))
      : [];
    setServers(data);
    setLoading(false);
  }

  // Create new server
  async function addServer(serverFromResponse) {
    setLoading(true);
    const { id, created_at } = serverFromResponse;
    const server = { id, created_at };
    let data = (await JSON.parse(localStorage.getItem('servers')))
    if (data === null) { data = [] };

    data.push(server);
    data.sort((a, b) => b.created_at - a.created_at);

    localStorage.setItem('servers', JSON.stringify(data));
    setServers(data);
    setSuccess(true);

    setLoading(false);
  }

  // Edit Server
  async function editServer(server) {
    setLoading(true);
    const currentServers = servers.filter((i) => i.id !== server.id);
    const currentServer = servers.find((i) => i.id === server.id);
    currentServer.name = server.name;
    currentServer.serverId = server.serverId;
    currentServer.ipAddress = server.ipAddress;
    currentServer.updated_at = new Date();
    currentServers.push(currentServer);
    currentServers.sort((a, b) => b.created_at - a.created_at);
    // currentServers.updatedDate =
    // console.log(currentServers);
    localStorage.setItem('servers', JSON.stringify(currentServers));
    setServers(currentServers);
    setLoading(false);
    setSuccess(true);
  }

  // Delete Server
  async function deleteServer(currentId) {
    setLoading(true);
    const currentServers = servers.filter((i) => i.id !== currentId);
    // console.log(currentServers, currentServerId);
    localStorage.setItem('servers', JSON.stringify(currentServers));
    setServers(currentServers);
    setLoading(false);
    setSuccess(true);
  }

  useEffect(() => {
    getServers();
  }, []);

  const requests = useMemo(
    () => ({
      servers,
      // error,
      loading,
      success,
      addServer,
      editServer,
      deleteServer,
      getServers,
      setSuccess,
    }),
    [
      servers,
      // error,
      loading,
      success,
    ],
  );

  return (
    <ServerContext.Provider value={requests}>{children}</ServerContext.Provider>
  );
}

export default ServerContext;
