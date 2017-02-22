/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectHome = (state) => state.get('home')

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username') || window.localStorage.getItem('currentUser') || ''
)

export {
  selectHome,
  makeSelectUsername
}
