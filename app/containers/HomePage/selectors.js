/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectHome = (state) => state.get('home')

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username') || 'chris.witko@me.com'
)

export {
  selectHome,
  makeSelectUsername
}
