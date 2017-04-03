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

export const CHANGE_PASSWORD = 'newspeller/RegisterPage/CHANGE_PASSWORD'
export const CHANGE_TIMEZONE = 'newspeller/RegisterPage/CHANGE_TIMEZONE'
export const CHANGE_LANGUAGE = 'newspeller/RegisterPage/CHANGE_LANGUAGE'

export const USER_SEND_ACTIVATION = 'newspeller/RegisterPage/USER_SEND_ACTIVATION'
export const USER_SEND_ACTIVATION_SUCCESS = 'newspeller/RegisterPage/USER_SEND_ACTIVATION_SUCCESS'
export const USER_SEND_ACTIVATION_ERROR = 'newspeller/RegisterPage/USER_SEND_ACTIVATION_ERROR'

export const FORM_MISSING_FIELDS_ERROR = 'newspeller/RegisterPage/FORM_MISSING_FIELDS_ERROR'
