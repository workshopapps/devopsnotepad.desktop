import ServerRepo from '../../database/repositories/ServerRepo.js';
import { ServiceError } from '../../lib/errors/index.js';
import { check_ip_status } from '../../utils/index.js';
import PushNotification from './pushNotificationForServer.js';

export default async function create(params) {
  const { name, ipAddress, deviceId } = params;

  const existingServer = await ServerRepo.getServerByName(name, deviceId);
  if (existingServer) throw new ServiceError('Server already exists');

  await ServerRepo.create(params);

  const server = await ServerRepo.getServerByName(name, deviceId);

  const isOnline = await check_ip_status(ipAddress);

  const data = { server, isOnline };

  await PushNotification.saveServerToFirebase(data);

  return data;
}
