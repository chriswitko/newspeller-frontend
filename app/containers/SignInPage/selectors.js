/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('signin')

const makeSelectUsername = () => createSelector(
  selectLocal,
  (localState) => localState.get('username')
)

const makeSelectPassword = () => createSelector(
  selectLocal,
  (localState) => localState.get('password') || ''
)

const makeSelectLoading = () => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = () => createSelector(
  selectLocal,
  (localState) => localState.get('error')
)

const makeSelectToken = () => createSelector(
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
