/* eslint-disable quotes */
import ping from 'ping';
import { validationResult } from 'express-validator';

import { ValidationError } from './../lib/errors/index.js';

export async function check_ip_status(address) {
  let ipStatus = await ping.promise.probe(address);
  return ipStatus.alive;
}

export function validatePayload(req) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const validatedErrors = {
      errors: errors.array(),
      statusCode: ValidationError.statusCode,
      message: 'Validation errors',
    };

    return validatedErrors;
  }

  return false;
}
