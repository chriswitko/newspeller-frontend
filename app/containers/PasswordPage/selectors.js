/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('password')

const makeSelectUsername = () => createSelector(
  selectLocal,
  (localState) => localState.get('username')
)

const makeSelectPassword = () => createSelector(
  selectLocal,
  (localState) => localState.get('password')
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
  (localState) => localState.get('token')
)

const makeSelectReset = () => createSelector(
  selectLocal,
  (localState) => localState.get('reset')
)

const makeSelectUpdated = () => createSelector(
  selectLocal,
  (localState) => localState.get('updated')
)

export {
  makeSelectUsername,
  makeSelectPassword,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError,
  makeSelectReset,
  makeSelectUpdated
}
