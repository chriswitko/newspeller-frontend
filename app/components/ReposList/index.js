import React, { PropTypes } from 'react'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'
import RepoListItem from 'containers/RepoListItem'

function ReposList ({ loading, error, repos, onRemove, onAdd }) {
  if (loading) {
    return <List component={LoadingIndicator} />
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    )
    return <List component={ErrorComponent} />
  }

  if (repos !== false) {
    return <List items={repos} component={RepoListItem} onRemove={onRemove} onAdd={onAdd} />
  }

  return null
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func
}

export default ReposList
