import ServerRepo from '../../database/repositories/ServerRepo.js';
import { ServiceError } from '../../lib/errors/index.js';
import { check_ip_status } from '../../utils/index.js';
import PushNotification from './pushNotificationForServer.js';
import config from '../../config/index.js';

export default async function create(params, userId) {
  const { name, ipAddress } = params;

  const existingServer = await ServerRepo.getServerByName(name, userId);
  if (existingServer) throw new ServiceError('Server already exists');

  await ServerRepo.create({ ...params, userId });

  const server = await ServerRepo.getServerByName(name, userId);

  const isOnline = await check_ip_status(ipAddress);

  const data = { server, isOnline };

  await PushNotification.saveServerToFirebase(data);

  const notificationEndpoint = `${config.app.url}/${server.id}/notifications`;
  const availabilityEndpoint = `${config.app.url}/${server.id}/availability`;

  return {
    server,
    isOnline,
    notificationEndpoint,
    availabilityEndpoint,
  };
}
