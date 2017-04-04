import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  SAVE_PASSWORD,
  SAVE_PASSWORD_SUCCESS,
  REPORT_ERROR
} from './constants'

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

export const resetPassword = email => {
  return {
    type: RESET_PASSWORD,
    email
  }
}

export const resetPasswordSuccess = _ => {
  return {
    type: RESET_PASSWORD_SUCCESS
  }
}

export const savePassword = (password, token) => {
  return {
    type: SAVE_PASSWORD,
    password,
    token
  }
}

export const savePasswordSuccess = _ => {
  return {
    type: SAVE_PASSWORD_SUCCESS
  }
}

export const reportError = err => {
  return {
    type: REPORT_ERROR,
    err
  }
}
