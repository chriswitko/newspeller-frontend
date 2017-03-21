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
import RepoLink from './RepoLink'
import Wrapper from './Wrapper'
import Switch from 'react-toggle-switch'
import Avatar from 'react-avatar'

import styled from 'styled-components'

const Img = styled.img`
  border-radius: 3px;
`

const Spacer = styled.div`
  border-radius: 3px;
  margin-right: 5px;
`

export class RepoListItem extends React.Component {
  render () {
    const {item, subscriptions, onRemove, onAdd} = this.props

    const isSubscribed = (item) => {
      const allSubscriptions = (subscriptions || []).map(s => {
        if (s.is_subscribed) {
          return s.code
        }
      })

      return allSubscriptions.includes(item.code) || item.is_subscribed
    }

    const onSwitch = (item, isSubscribed) => {
      if (isSubscribed) {
        return onRemove(item)
      }
      return onAdd(item)
    }
    
    const icon = (item) => {
      let icon = '<div><div>'
      if (item.facebook_id) {
        icon = <Avatar facebookId={item.facebook_id} size={32} />
      } else if (item.twitter_id) {
        icon = <Avatar twitterId={item.twitter_id} size={32} />
      } else {
        icon = <Img width='32' src={item.icon} />
      }
      return <Spacer>{icon}</Spacer>
    }

    const content = (
      <Wrapper>
        <RepoLink href={item.url} target='_blank'>
          {icon(item)}
          {item.channelName} [{item.language}]
          <br />
          &#8627;&nbsp;
          {item.sectionName}
        </RepoLink>
        <Switch on={isSubscribed(item)} onClick={() => onSwitch(item, isSubscribed(item))} />
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
