import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  USER_AUTHORIZE,
  USER_SUCCESS,
  USER_ERROR,
  FORM_MISSING_FIELDS_ERROR
} from './constants'

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export const changeUsername = name => {
  return {
    type: CHANGE_USERNAME,
    name
  }
}

export const changePassword = password => {
  return {
    type: CHANGE_PASSWORD,
    password
  }
}

export const authorizeUser = (email, password) => {
  return {
    type: USER_AUTHORIZE,
    email,
    password
  }
}

export const authorizeSuccess = user => {
  return {
    type: USER_SUCCESS,
    user
  }
}

export const authorizeError = err => {
  return {
    type: USER_ERROR,
    err
  }
}

export const missingFields = err => {
  return {
    type: FORM_MISSING_FIELDS_ERROR,
    err
  }
}
