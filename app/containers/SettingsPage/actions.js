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
export const changeTime = time => {
  return {
    type: CHANGE_TIME,
    time
  }
}

export const addNewHour = hour => {
  return {
    type: ADD_HOUR,
    hour
  }
}

export const addHourSuccess = hour => {
  return {
    type: ADD_HOUR_SUCCESS,
    hour
  }
}

export const addHourError = err => {
  return {
    type: ADD_HOUR_ERROR,
    err
  }
}

export const removeHourSuccess = hour => {
  return {
    type: REMOVE_HOUR_SUCCESS,
    hour
  }
}

export const removeHourError = err => {
  return {
    type: REMOVE_HOUR_ERROR,
    err
  }
}

export const removeDaySuccess = day => {
  return {
    type: REMOVE_DAY_SUCCESS,
    day
  }
}

export const removeDayError = err => {
  return {
    type: REMOVE_DAY_ERROR,
    err
  }
}

export const addDaySuccess = day => {
  return {
    type: ADD_DAY_SUCCESS,
    day
  }
}

export const addDayError = day => {
  return {
    type: ADD_DAY_ERROR,
    day
  }
}

export const removeDay = day => {
  return {
    type: REMOVE_DAY,
    day
  }
}

export const addDay = day => {
  return {
    type: ADD_DAY,
    day
  }
}

export const removeHour = hour => {
  return {
    type: REMOVE_HOUR,
    hour
  }
}

export const updateTimezoneSuccess = timezone => {
  return {
    type: UPDATE_TIMEZONE_SUCCESS,
    timezone
  }
}

export const updateTimezoneError = err => {
  return {
    type: UPDATE_TIMEZONE_ERROR,
    err
  }
}

export const updateTimezone = timezone => {
  return {
    type: UPDATE_TIMEZONE,
    timezone
  }
}

export const removeAccount = _ => {
  return {
    type: REMOVE_ACCOUNT
  }
}

export const removeAccountSuccess = _ => {
  return {
    type: REMOVE_ACCOUNT_SUCCESS
  }
}

export const removeAccountError = _ => {
  return {
    type: REMOVE_ACCOUNT_ERROR
  }
}

export const changeUserLanguageSuccess = _ => {
  return {
    type: CHANGE_LANGUAGE_SUCCESS
  }
}

export const changeUserLanguageError = _ => {
  return {
    type: CHANGE_LANGUAGE_ERROR
  }
}

export const changeUserLanguage = language => {
  return {
    type: CHANGE_LANGUAGE,
    locale: language
  }
}

export const loadUserData = _ => {
  return {
    type: LOAD_USER_DATA
  }
}

export const userLoaded = data => {
  return {
    type: LOAD_USER_DATA_SUCCESS,
    data
  }
}

export const userError = error => {
  return {
    type: LOAD_USER_DATA_ERROR,
    error
  }
}
