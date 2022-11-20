import ServerRepo from '../../database/repositories/ServerRepo.js';
import { NotFoundError } from '../../lib/errors/index.js';

export default async function getAllServers(query) {
  const { device } = query;

  const servers = await ServerRepo.getServersByDevice(device);
  if (!servers.length > 0) throw new NotFoundError('There are no servers added on this device');

  return {
    message: `${servers.length} servers found on this device`,
    servers,
  };
}
