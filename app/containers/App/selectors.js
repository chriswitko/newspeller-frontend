/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const DEFAULT_LANG = 'en'
const availableLanguages = ['en', 'de', 'pl']

const _getInterfaceLanguage = () => {
  let lang = null
  if (typeof navigator !== 'undefined' && navigator.languages && typeof navigator.languages !== 'undefined' && navigator.languages[0] && typeof navigator.languages[0] !== 'undefined') {
    lang = navigator.languages[0]
  } else if (typeof navigator !== 'undefined' && navigator.language && typeof navigator.language !== 'undefined') {
    lang = navigator.language
  } else if (typeof navigator !== 'undefined' && navigator.userLanguage && typeof navigator.userLanguage !== 'undefined') {
    lang = navigator.userLanguage
  } else if (typeof navigator !== 'undefined' && navigator.browserLanguage && typeof navigator.browserLanguage !== 'undefined') {
    lang = navigator.browserLanguage
  }

  const l = (lang || '').split('-')[0]
  if (availableLanguages.includes(l)) {
    return l
  }
  return DEFAULT_LANG
}

const selectGlobal = (state) => state.get('global')

const selectLanguage = (state) => state.get('language')

const makeSelectLocale = () => createSelector(
  selectLanguage,
  (languageState) => window.localStorage.getItem('language') || _getInterfaceLanguage() || languageState.get('locale') || 'en'
)

const makeSelectEmail = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'email'])
)

const makeSelectActivatedAt = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'activated_at']) || window.localStorage.getItem('activatedAt')
)

const makeSelectToken = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('token') || window.localStorage.getItem('token')
)

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser') || window.localStorage.getItem('currentUser')
)

const makeSelectUserId = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUserId') || window.localStorage.getItem('currentUserId')
)

const makeSelectNextAt = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'nextAt'])
)

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
)

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
)

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
)

const makeSelectSubscriptions = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'subscriptions'])
)

const makeSelectFeeds = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['channels'])
)

const makeSelectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return (state) => {
    const routingState = state.get('route') // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

export {
  makeSelectFeeds,
  makeSelectCurrentUser,
  makeSelectNextAt,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocationState,
  makeSelectUserId,
  makeSelectToken,
  makeSelectSubscriptions,
  makeSelectLocale,
  makeSelectActivatedAt,
  makeSelectEmail
}
