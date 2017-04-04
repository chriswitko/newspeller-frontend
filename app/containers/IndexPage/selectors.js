/**
 * IndexPage selectors
 */

import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('index')

const makeSelectUsername = _ => createSelector(
  selectLocal,
  (localState) => localState.get('username')
)

const makeSelectToken = _ => createSelector(
  selectLocal,
  (localState) => localState.get('token')
)

const makeSelectLoading = _ => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = _ => createSelector(
  selectLocal,
  (localState) => localState.get('error')
)

export {
  makeSelectUsername,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError
}
