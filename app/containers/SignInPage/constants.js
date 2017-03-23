/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'newspeller/SignInPage/CHANGE_USERNAME'
export const CHANGE_PASSWORD = 'newspeller/SignInPage/CHANGE_PASSWORD'

export const USER_AUTHORIZE = 'newspeller/SignInPage/USER_AUTHORIZE'
export const USER_SUCCESS = 'newspeller/SignInPage/USER_SUCCESS'
export const USER_ERROR = 'newspeller/SignInPage/USER_AUTHORIZED'

export const FORM_MISSING_FIELDS_ERROR = 'newspeller/SignInPage/FORM_MISSING_FIELDS_ERROR'
