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

export const CHANGE_USERNAME = 'newspeller/PasswordPage/CHANGE_USERNAME'
export const CHANGE_PASSWORD = 'newspeller/PasswordPage/CHANGE_PASSWORD'

export const RESET_PASSWORD = 'newspeller/PasswordPage/RESET_PASSWORD'
export const RESET_PASSWORD_SUCCESS = 'newspeller/PasswordPage/RESET_PASSWORD_SUCCESS'
export const SAVE_PASSWORD = 'newspeller/PasswordPage/SAVE_PASSWORD'
export const SAVE_PASSWORD_SUCCESS = 'newspeller/PasswordPage/SAVE_PASSWORD_SUCCESS'

export const REPORT_ERROR = 'newspeller/PasswordPage/REPORT_ERROR'
