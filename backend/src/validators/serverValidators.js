/* eslint-disable quotes */
import { body, validationResult } from 'express-validator';

export const createServerValidator = [
  body('name')
    .notEmpty()
    .custom((value) => value.length > 1),

  body('deviceId')
    .notEmpty()
    .custom((value) => value.length > 1),

  body('ipAddress')
    .notEmpty()
    .custom((value) => value.length > 1),
];

export const updateServerValidator = [
  body('name')
    .notEmpty()
    .custom((value) => value.length > 1),

  body('id').notEmpty().isUUID(),
];
