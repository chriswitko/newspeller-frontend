import React, { PropTypes } from 'react'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'
import RepoListItem from 'containers/RepoListItem'

function ChannelsList ({ loading, error, channels, onRemove, onAdd }) {
  if (loading) {
    return <List component={LoadingIndicator} />
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    )
    return <List component={ErrorComponent} />
  }

  if (channels !== false) {
    return <List items={channels} component={RepoListItem} onRemove={onRemove} onAdd={onAdd} />
  }

  return null
}

ChannelsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  channels: PropTypes.any,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func
}

export default ChannelsList
