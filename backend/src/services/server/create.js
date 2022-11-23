import ServerRepo from '../../database/repositories/ServerRepo.js';
import { ServiceError } from '../../lib/errors/index.js';
import { check_ip_status } from '../../utils/index.js';

export default async function create(params) {
  const { name, ipAddress } = params;

  const existingServer = await ServerRepo.getServerByName(name);
  if (existingServer) throw new ServiceError('Server already exists');

  await ServerRepo.create(params);

  const server = await ServerRepo.getServerByName(name);

  const isOnline = await check_ip_status(ipAddress);

  return {
    server,
    isOnline,
  };
}
