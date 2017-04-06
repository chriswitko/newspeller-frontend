/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable'

import {
  CHANGE_LOCALE
} from './constants'
import {
  DEFAULT_LOCALE
} from '../App/constants'

const initialState = fromJS({
  locale: window.localStorage.getItem('language') || DEFAULT_LOCALE
})

const languageProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      window.localStorage.setItem('language', action.locale)
      return state
        .set('locale', action.locale)
    default:
      return state
  }
}

export default languageProviderReducer
