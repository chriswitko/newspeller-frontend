/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_PASSWORD,
  CHANGE_TIMEZONE,
  CHANGE_LANGUAGE,
  USER_SEND_ACTIVATION,
  USER_SEND_ACTIVATION_SUCCESS,
  USER_SEND_ACTIVATION_ERROR,
  FORM_MISSING_FIELDS_ERROR
} from './constants'

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export function changePassword (password) {
  return {
    type: CHANGE_PASSWORD,
    password
  }
}

export function changeTimezone (timezone) {
  return {
    type: CHANGE_TIMEZONE,
    timezone
  }
}

export function changeLocale (language) {
  return {
    type: CHANGE_LANGUAGE,
    language
  }
}

export function sendActivationEmail (user) {
  return {
    type: USER_SEND_ACTIVATION,
    user
  }
}

export function sendActivationEmailSuccess (user) {
  return {
    type: USER_SEND_ACTIVATION_SUCCESS,
    user
  }
}

export function sendActivationEmailError (err) {
  return {
    type: USER_SEND_ACTIVATION_ERROR,
    err
  }
}

export function missingFields (err) {
  return {
    type: FORM_MISSING_FIELDS_ERROR,
    err
  }
}
