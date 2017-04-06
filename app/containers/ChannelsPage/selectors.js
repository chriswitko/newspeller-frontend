import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('channels')

const makeSelectLoading = _ => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = _ => createSelector(
  selectLocal,
  (localState) => localState.get('error')
)

const makeSelectConfirmedAt = _ => createSelector(
  selectLocal,
  (localState) => localState.get('confirmedAt')
)

const makeSelectResent = _ => createSelector(
  selectLocal,
  (localState) => localState.get('resent')
)

const makeSelectCategory = _ => createSelector(
  selectLocal,
  (localState) => localState.get('selectedCategory')
)

const makeSelectFeeds = _ => createSelector(
  selectLocal,
  (localState) => localState.getIn(['channels'])
)

const makeSelectChannels = _ => createSelector(
  selectLocal,
  (localState) => localState.getIn(['displayedChannels'])
)

const makeSelectToken = _ => createSelector(
  selectLocal,
  (localState) => localState.get('token') || window.localStorage.getItem('token')
)

export {
  makeSelectChannels,
  makeSelectCategory,
  makeSelectToken,
  makeSelectFeeds,
  makeSelectResent,
  makeSelectLoading,
  makeSelectError,
  makeSelectConfirmedAt
}
