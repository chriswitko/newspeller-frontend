/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_LOCALE
} from './constants'

export const changeLocale = languageLocale => {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale
  }
}
