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
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  SAVE_PASSWORD,
  SAVE_PASSWORD_SUCCESS,
  REPORT_ERROR
} from './constants'

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername (name) {
  return {
    type: CHANGE_USERNAME,
    name
  }
}

export function changePassword (password) {
  return {
    type: CHANGE_PASSWORD,
    password
  }
}

export function resetPassword (email) {
  return {
    type: RESET_PASSWORD,
    email
  }
}

export function resetPasswordSuccess () {
  return {
    type: RESET_PASSWORD_SUCCESS
  }
}

export function savePassword (password, token) {
  return {
    type: SAVE_PASSWORD,
    password,
    token
  }
}

export function savePasswordSuccess () {
  return {
    type: SAVE_PASSWORD_SUCCESS
  }
}

export function reportError (err) {
  return {
    type: REPORT_ERROR,
    err
  }
}
