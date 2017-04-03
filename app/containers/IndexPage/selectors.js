/**
 * IndexPage selectors
 */

import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('index')

const makeSelectUsername = () => createSelector(
  selectLocal,
  (localState) => localState.get('username')
)

const makeSelectToken = () => createSelector(
  selectLocal,
  (localState) => localState.get('token')
)

const makeSelectLoading = () => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = () => createSelector(
  selectLocal,
  (localState) => localState.get('error')
)

export {
  makeSelectUsername,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError
}
