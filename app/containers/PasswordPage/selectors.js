/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('password')

const makeSelectUsername = _ => createSelector(
  selectLocal,
  (localState) => localState.get('username')
)

const makeSelectPassword = _ => createSelector(
  selectLocal,
  (localState) => localState.get('password')
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
  (localState) => localState.get('token')
)

const makeSelectReset = _ => createSelector(
  selectLocal,
  (localState) => localState.get('reset')
)

const makeSelectUpdated = _ => createSelector(
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
