import {
  CHANGE_TIME,
  ADD_HOUR,
  ADD_HOUR_SUCCESS,
  ADD_HOUR_ERROR,
  REMOVE_DAY,
  REMOVE_DAY_SUCCESS,
  REMOVE_DAY_ERROR,
  ADD_DAY,
  ADD_DAY_SUCCESS,
  ADD_DAY_ERROR,
  REMOVE_HOUR,
  REMOVE_HOUR_SUCCESS,
  REMOVE_HOUR_ERROR,
  UPDATE_TIMEZONE,
  UPDATE_TIMEZONE_SUCCESS,
  UPDATE_TIMEZONE_ERROR,
  REMOVE_ACCOUNT,
  REMOVE_ACCOUNT_SUCCESS,
  REMOVE_ACCOUNT_ERROR,
  CHANGE_LANGUAGE,
  CHANGE_LANGUAGE_SUCCESS,
  CHANGE_LANGUAGE_ERROR,
  LOAD_USER_DATA,
  LOAD_USER_DATA_SUCCESS,
  LOAD_USER_DATA_ERROR
} from './constants'

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeTime (time) {
  return {
    type: CHANGE_TIME,
    time
  }
}

export function addNewHour (hour) {
  return {
    type: ADD_HOUR,
    hour
  }
}

export function addHourSuccess (hour) {
  return {
    type: ADD_HOUR_SUCCESS,
    hour
  }
}

export function addHourError (err) {
  return {
    type: ADD_HOUR_ERROR,
    err
  }
}

export function removeHourSuccess (hour) {
  return {
    type: REMOVE_HOUR_SUCCESS,
    hour
  }
}

export function removeHourError (err) {
  return {
    type: REMOVE_HOUR_ERROR,
    err
  }
}

export function removeDaySuccess (day) {
  return {
    type: REMOVE_DAY_SUCCESS,
    day
  }
}

export function removeDayError (err) {
  return {
    type: REMOVE_DAY_ERROR,
    err
  }
}

export function addDaySuccess (day) {
  return {
    type: ADD_DAY_SUCCESS,
    day
  }
}

export function addDayError (day) {
  return {
    type: ADD_DAY_ERROR,
    day
  }
}

export function removeDay (day) {
  return {
    type: REMOVE_DAY,
    day
  }
}

export function addDay (day) {
  return {
    type: ADD_DAY,
    day
  }
}

export function removeHour (hour) {
  return {
    type: REMOVE_HOUR,
    hour
  }
}

export function updateTimezoneSuccess (timezone) {
  return {
    type: UPDATE_TIMEZONE_SUCCESS,
    timezone
  }
}

export function updateTimezoneError (err) {
  return {
    type: UPDATE_TIMEZONE_ERROR,
    err
  }
}

export function updateTimezone (timezone) {
  return {
    type: UPDATE_TIMEZONE,
    timezone
  }
}

export function removeAccount () {
  return {
    type: REMOVE_ACCOUNT
  }
}

export function removeAccountSuccess () {
  return {
    type: REMOVE_ACCOUNT_SUCCESS
  }
}

export function removeAccountError () {
  return {
    type: REMOVE_ACCOUNT_ERROR
  }
}

export function changeUserLanguageSuccess () {
  return {
    type: CHANGE_LANGUAGE_SUCCESS
  }
}

export function changeUserLanguageError () {
  return {
    type: CHANGE_LANGUAGE_ERROR
  }
}

export function changeUserLanguage (language) {
  return {
    type: CHANGE_LANGUAGE,
    locale: language
  }
}

export function loadUserData () {
  return {
    type: LOAD_USER_DATA
  }
}

export function userLoaded (data) {
  return {
    type: LOAD_USER_DATA_SUCCESS,
    data
  }
}

export function userError (error) {
  return {
    type: LOAD_USER_DATA_ERROR,
    error
  }
}
