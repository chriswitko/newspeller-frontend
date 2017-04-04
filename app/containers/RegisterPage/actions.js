import {
  CHANGE_PASSWORD,
  CHANGE_TIMEZONE,
  CHANGE_LANGUAGE,
  USER_SEND_ACTIVATION,
  USER_SEND_ACTIVATION_SUCCESS,
  USER_SEND_ACTIVATION_ERROR,
  FORM_MISSING_FIELDS_ERROR
} from './constants'

export const changePassword = password => {
  return {
    type: CHANGE_PASSWORD,
    password
  }
}

export const changeTimezone = timezone => {
  return {
    type: CHANGE_TIMEZONE,
    timezone
  }
}

export const changeLocale = language => {
  return {
    type: CHANGE_LANGUAGE,
    language
  }
}

export const sendActivationEmail = user => {
  return {
    type: USER_SEND_ACTIVATION,
    user
  }
}

export const sendActivationEmailSuccess = user => {
  return {
    type: USER_SEND_ACTIVATION_SUCCESS,
    user
  }
}

export const sendActivationEmailError = err => {
  return {
    type: USER_SEND_ACTIVATION_ERROR,
    err
  }
}

export const missingFields = err => {
  return {
    type: FORM_MISSING_FIELDS_ERROR,
    err
  }
}
