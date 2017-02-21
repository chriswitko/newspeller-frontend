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

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS'
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS'
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR'
export const ADD_TOPIC = 'boilerplate/App/ADD_TOPIC'
export const ADD_TOPIC_SUCCESS = 'boilerplate/App/ADD_TOPIC_SUCCESS'
export const REMOVE_TOPIC = 'boilerplate/App/REMOVE_TOPIC'
export const REMOVE_TOPIC_SUCCESS = 'boilerplate/App/REMOVE_TOPIC_SUCCESS'
export const REMOVE_DAY = 'boilerplate/App/REMOVE_DAY'
export const REMOVE_DAY_SUCCESS = 'boilerplate/App/REMOVE_DAY_SUCCESS'
export const ADD_DAY = 'boilerplate/App/ADD_DAY'
export const ADD_DAY_SUCCESS = 'boilerplate/App/ADD_DAY_SUCCESS'
export const REMOVE_HOUR = 'boilerplate/App/REMOVE_HOUR'
export const REMOVE_HOUR_SUCCESS = 'boilerplate/App/REMOVE_HOUR_SUCCESS'
export const ADD_HOUR = 'boilerplate/App/ADD_HOUR'
export const ADD_HOUR_SUCCESS = 'boilerplate/App/ADD_HOUR_SUCCESS'


export const LOAD_FEEDS = 'boilerplate/App/LOAD_FEEDS'
export const LOAD_FEEDS_SUCCESS = 'boilerplate/App/LOAD_FEEDS_SUCCESS'
export const LOAD_FEEDS_ERROR = 'boilerplate/App/LOAD_FEEDS_ERROR'

export const DEFAULT_LOCALE = 'en'