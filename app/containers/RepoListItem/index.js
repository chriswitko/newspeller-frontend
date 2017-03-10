/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectCurrentUser, makeSelectSubscriptions } from 'containers/App/selectors'
import ListItem from 'components/ListItem'
import RemoveButton from './RemoveButton'
import AddButton from './AddButton'
import RepoLink from './RepoLink'
import Wrapper from './Wrapper'

export class RepoListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    const {item, subscriptions, onRemove, onAdd} = this.props

    const isSubscribed = (item) => {
      const allSubscriptions = (subscriptions || []).map(s => {
        if (s.is_subscribed) {
          return s.code
        }
      })

      return ~allSubscriptions.indexOf(item.code) || item.is_subscribed
    }

    const buttonRemove = <RemoveButton href='#' onClick={() => onRemove(item)}>Remove</RemoveButton>
    const buttonAdd = <AddButton href='#' onClick={() => onAdd(item)}>Add</AddButton>

    const content = (
      <Wrapper>
        <RepoLink href={item.url} target='_blank'>
          <img src='https://logo.clearbit.com/cnn.com?s=20' />
          &nbsp;&nbsp;
          {item.name} (PL)
        </RepoLink>
        { isSubscribed(item) ? buttonRemove : buttonAdd }
      </Wrapper>
    )

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item}`} item={content} />
    )
  }
}

RepoListItem.propTypes = {
  item: React.PropTypes.any,
  onRemove: React.PropTypes.func,
  onAdd: React.PropTypes.func,
  currentUser: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.any
  ])
}

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  subscriptions: makeSelectSubscriptions()
}))(RepoListItem)
