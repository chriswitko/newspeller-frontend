/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectHome = (state) => state.get('home')
const selectGlobal = (state) => state.get('global')

const makeSelectEmail = () => createSelector(
  selectHome,
  (homeState) => homeState.get('email') || ''
)

const makeSelectEmailAgain = () => createSelector(
  selectHome,
  (homeState) => homeState.get('emailAgain') || ''
)

const makeSelectPassword = () => createSelector(
  selectHome,
  (homeState) => homeState.get('password') || ''
)

const makeSelectTimezone = () => createSelector(
  selectHome,
  (homeState) => homeState.get('timezone') || ''
)

const makeSelectToken = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('token') || ''
)

export {
  selectHome,
  makeSelectEmail,
  makeSelectEmailAgain,
  makeSelectPassword,
  makeSelectTimezone,
  makeSelectToken
}
