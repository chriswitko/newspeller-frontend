import { createSelector } from 'reselect'

const DEFAULT_LANG = 'en'
const availableLanguages = ['en', 'de']

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

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state) => state.get('language')

/**
 * Select the language locale
 */

const makeSelectLocale = () => createSelector(
  selectLanguage,
  (languageState) => window.localStorage.getItem('language') || _getInterfaceLanguage() || languageState.get('locale') || 'en'
)

export {
  selectLanguage,
  makeSelectLocale
}
