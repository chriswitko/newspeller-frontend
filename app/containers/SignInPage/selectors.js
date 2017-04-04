/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('signin')

const makeSelectUsername = _ => createSelector(
  selectLocal,
  (localState) => localState.get('username')
)

const makeSelectPassword = _ => createSelector(
  selectLocal,
  (localState) => localState.get('password') || ''
)

const makeSelectLoading = _ => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = _ => createSelector(
  selectLocal,
  (localState) => localState.get('error')
)

const makeSelectToken = _ => createSelector(
  selectLocal,
  (localState) => localState.get('token') || ''
)

export {
  makeSelectUsername,
  makeSelectPassword,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError
}
