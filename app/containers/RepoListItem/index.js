/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedNumber } from 'react-intl'

import { makeSelectCurrentUser } from 'containers/App/selectors'
import ListItem from 'components/ListItem'
import IssueIcon from './IssueIcon'
import IssueLink from './IssueLink'
import RemoveButton from './RemoveButton'
import AddButton from './AddButton'
import RepoLink from './RepoLink'
import Wrapper from './Wrapper'

export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    const {currentUser, item, onRemove, onAdd} = this.props
    // let nameprefix = ''

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    // if (item.owner.login !== this.props.currentUser) {
    //   nameprefix = `${item.owner.login}/`;
    // }
        // <RepoLink href={item.html_url} target="_blank">
        //   {nameprefix + item.name}
        // </RepoLink>
        // <IssueLink href={`${item.html_url}/issues`} target="_blank">
        //   <IssueIcon />
        //   <FormattedNumber value={item.open_issues_count} />
        // </IssueLink>

    // Put together the content of the repository
    // {`${currentUser}/${item}/issues`}
    const content = (
      <Wrapper>
        <RepoLink href='' target='_blank'>
          {item}
        </RepoLink>
        <RemoveButton href='#' onClick={() => onRemove(this)}>
          Remove
        </RemoveButton>
        &nbsp;
        <AddButton href='#' onClick={() => onAdd(this)}>
          Add
        </AddButton>
        &nbsp;
        <IssueLink href='' target='_blank'>
          <IssueIcon />
          <FormattedNumber value='1' />
        </IssueLink>
      </Wrapper>
    )

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item}`} item={content} />
    )
  }
}

RepoListItem.propTypes = {
  item: React.PropTypes.string,
  onRemove: React.PropTypes.func,
  onAdd: React.PropTypes.func,
  currentUser: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.any
  ])
}

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser()
}))(RepoListItem)
