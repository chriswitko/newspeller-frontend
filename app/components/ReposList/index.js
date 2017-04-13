import React from 'react'
import PropTypes from 'prop-types'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'
import RepoListItem from 'containers/RepoListItem'

const ReposList = ({ loading, error, subscriptions, onRemove, onAdd }) => {
  if (loading) {
    return <List component={LoadingIndicator} />
  }

  if (error !== false) {
    const ErrorComponent = _ => (
      <ListItem item={'Something went wrong, please try again!'} />
    )
    return <List component={ErrorComponent} />
  }

  if (subscriptions !== false) {
    return <List items={subscriptions} component={RepoListItem} onRemove={onRemove} onAdd={onAdd} />
  }

  return null
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
  subscriptions: PropTypes.any,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func
}

export default ReposList
