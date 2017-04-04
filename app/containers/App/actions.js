import {
  USER_LOGOUT,
  CHANGE_LOCALE_SUCCESS
} from './constants'

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */

export const logoutUser = _ => {
  return {
    type: USER_LOGOUT
  }
}

export const changeLocaleSuccess = _ => {
  return {
    type: CHANGE_LOCALE_SUCCESS
  }
}
