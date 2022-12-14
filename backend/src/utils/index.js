/* eslint-disable quotes */
import ping from 'ping';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import config from '../config/index.js';

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

export function generateRandomCode(length) {
  return crypto
    .randomBytes(length * 3)
    .toString('base64')
    .split('+')
    .join('')
    .split('/')
    .join('')
    .split('=')
    .join('')
    .substr(0, length);
}

export async function generateJWTToken(payload, expires, secret = config.app.secret) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        ...payload,
        counter: generateRandomCode(36),
      },
      secret,
      { expiresIn: expires || '720h' },
      (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
}

export async function decodeToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.app.secret, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
}
