import { check } from 'express-validator';

import { logValMsg, serverIdValMsg } from './validationMsg.js';

export const createNotificationValidator = [
  check('logs', logValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),

  check('serverId', serverIdValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),
];
