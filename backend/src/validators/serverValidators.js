/* eslint-disable quotes */
import { body } from 'express-validator';

import { nameValMsg, ipAddressValMsg, emailValMsg} from './validationMsg.js';

export const createServerValidator = [
  body('name', nameValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),

  body('ipAddress', ipAddressValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),
  
  body('email', emailValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),
];

export const updateServerValidator = [
  body('name', nameValMsg)
  .optional()
  .custom((value) => value.length > 1),

  body('ipAddress', nameValMsg)
  .optional()
  .custom((value) => value.length > 1),
];
