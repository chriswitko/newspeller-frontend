/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const USER_LOGOUT = 'newspeller/App/USER_LOGOUT'

export const CHANGE_LOCALE = 'newspeller/LanguageToggle/CHANGE_LOCALE'
export const CHANGE_LOCALE_SUCCESS = 'newspeller/LanguageToggle/CHANGE_LOCALE_SUCCESS'

export const DEFAULT_LOCALE = 'en'
