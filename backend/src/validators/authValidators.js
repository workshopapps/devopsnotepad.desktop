/* eslint-disable quotes */
import { body } from 'express-validator';

import { nameValMsg, emailValMsg, passwordValMsg, loginPasswordMsg } from './validationMsg.js';

const passwordMiddlewareHelper = () =>
  body('password', passwordValMsg)
    .trim()
    .exists({ checkFalsy: true })
    .withMessage('You must type a password')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
    });

export const registerUserValidator = [
  body('name', nameValMsg)
    .notEmpty()
    .custom((value) => value.length > 1),
  body('email', emailValMsg).notEmpty().isEmail(),
  passwordMiddlewareHelper(),
];

export const loginUserValidator = [body('email', emailValMsg).notEmpty().isEmail(), body('password', loginPasswordMsg).notEmpty().isString()];

export const resetUserLinkValidator = [body('email', emailValMsg).notEmpty().isEmail()];

export const updateUserPasswordValidator = [
  body('token', nameValMsg)
    .notEmpty()
    .custom((value) => value.length > 3),
  body('id', emailValMsg).notEmpty().isUUID(),
  passwordMiddlewareHelper(),
];

export const verifyUserPasswordValidator = [
  body('token', nameValMsg)
    .notEmpty()
    .custom((value) => value.length > 3),
  body('id', emailValMsg).notEmpty().isUUID(),
];

// body('password')
// .exists({checkFalsy: true}).withMessage('You must type a password'),
// body('confirmedPassword')
// .exists({checkFalsy: true}).withMessage('You must type a confirmation password')
// .custom((value, {req}) => value === req.body.password).withMessage("The passwords do not match"),
