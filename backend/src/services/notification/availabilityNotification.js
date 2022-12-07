import PushNotification from '../server/pushNotificationForServer.js';
import ServerRepo from '../../database/repositories/ServerRepo.js';
import { ServiceError } from '../../lib/errors/index.js';

import { v4 as uuidv4 } from 'uuid';

export default async function createAvailabilityNotification(body, params) {
  const { serverId } = params;

  Object.assign(body, {
    ...params,
    created_at: `${new Date().toISOString()}`,
    id: uuidv4(),
  });

  const serverExists = await ServerRepo.getServerById(serverId);
  if (!serverExists) {
    throw new ServiceError('An error occured while creating new logs, server do not exist');
  }

  await PushNotification.saveAvailabilityNotificationToFirebase(body);

  return {
    data: 'logs received succesfully',
  };
}
