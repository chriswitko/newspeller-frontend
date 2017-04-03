import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('channels')

const makeSelectLoading = () => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = () => createSelector(
  selectLocal,
  (localState) => localState.get('error')
)

const makeSelectConfirmedAt = () => createSelector(
  selectLocal,
  (localState) => localState.get('confirmedAt')
)

const makeSelectResent = () => createSelector(
  selectLocal,
  (localState) => localState.get('resent')
)

const makeSelectFeeds = () => createSelector(
  selectLocal,
  (localState) => localState.getIn(['channels'])
)

const makeSelectToken = () => createSelector(
  selectLocal,
  (localState) => localState.get('token') || window.localStorage.getItem('token')
)

export {
  makeSelectToken,
  makeSelectFeeds,
  makeSelectResent,
  makeSelectLoading,
  makeSelectError,
  makeSelectConfirmedAt
}
