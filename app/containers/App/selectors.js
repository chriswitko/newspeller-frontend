/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const selectGlobal = (state) => state.get('global')

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
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
  makeSelectLocationState
}
