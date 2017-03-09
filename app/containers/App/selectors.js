/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const selectGlobal = (state) => state.get('global')

const makeSelectTimezone = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'timezone'])
)

const makeSelectGroupBy = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'groupBy'])
)

const makeSelectToken = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('token') || window.localStorage.getItem('token')
)

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser') || window.localStorage.getItem('currentUser')
)

const makeSelectUserId = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUserId') || window.localStorage.getItem('currentUserId')
)

const makeSelectNextAt = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'nextAt'])
)

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
)

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
)

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
)

const makeSelectSubscriptions = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'subscriptions'])
)

const makeSelectDays = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'days'])
)

const makeSelectHours = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'hours'])
)

const makeSelectFeeds = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['channels'])
)

const makeSelectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return (state) => {
    const routingState = state.get('route') // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectNextAt,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectDays,
  makeSelectHours,
  makeSelectFeeds,
  makeSelectLocationState,
  makeSelectUserId,
  makeSelectToken,
  makeSelectSubscriptions,
  makeSelectTimezone,
  makeSelectGroupBy
}
