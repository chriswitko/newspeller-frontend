/*
 * Index Actions
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
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  FORM_MISSING_FIELDS_ERROR
} from './constants'

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function registerEmail (email) {
  return {
    type: USER_REGISTER,
    email
  }
}

export function changeUsername (name) {
  return {
    type: CHANGE_USERNAME,
    name
  }
}

export function registerSuccess (user) {
  return {
    type: USER_REGISTER_SUCCESS,
    user
  }
}

export function registerError (err) {
  return {
    type: USER_REGISTER_ERROR,
    err
  }
}

export function missingFields (err) {
  return {
    type: FORM_MISSING_FIELDS_ERROR,
    err
  }
}
