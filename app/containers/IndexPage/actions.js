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
export const registerEmail = email => {
  return {
    type: USER_REGISTER,
    email
  }
}

export const changeUsername = name => {
  return {
    type: CHANGE_USERNAME,
    name
  }
}

export const registerSuccess = user => {
  return {
    type: USER_REGISTER_SUCCESS,
    user
  }
}

export const registerError = err => {
  return {
    type: USER_REGISTER_ERROR,
    err
  }
}

export const missingFields = err => {
  return {
    type: FORM_MISSING_FIELDS_ERROR,
    err
  }
}
