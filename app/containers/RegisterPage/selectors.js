/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectHome = (state) => state.get('home')
const selectGlobal = (state) => state.get('global')

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username') || window.localStorage.getItem('currentUser') || ''
)

const makeSelectPassword = () => createSelector(
  selectHome,
  (homeState) => homeState.get('password') || ''
)

const makeSelectToken = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('token') || ''
)

export {
  selectHome,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectToken
}
