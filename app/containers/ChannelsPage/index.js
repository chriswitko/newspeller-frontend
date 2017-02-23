/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectRepos, makeSelectFeeds, makeSelectLoading, makeSelectError } from 'containers/App/selectors'
import H2 from 'components/H2'
import ChannelsList from 'components/ChannelsList'
import CenteredSection from './CenteredSection'
import Section from './Section'
import messages from './messages'
import { loadRepos, loadFeeds, addTopic, removeTopic } from '../App/actions'

export class ChannelsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    this.props.onReady()
    // if (!this.props.repos.length) {
    //   this.props.onLoad()
    // }
    // if (this.props.repos.length && !this.props.channels.length) {
    //   this.props.onSubmitForm()
    // }
  }

  render () {
    const { loading, error, channels, repos, onRemove, onAdd } = this.props
    const reposListProps = {
      onRemove,
      onAdd,
      loading,
      error,
      channels,
      repos
    }

    return (
      <article>
        <Helmet
          title='Channels'
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage chris' }
          ]}
        />
        <div>
          <CenteredSection>
            <H2>
              Channels
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              All Channels
            </H2>
            <ChannelsList {...reposListProps} />
          </Section>
        </div>
      </article>
    )
  }
}

ChannelsPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  channels: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
    React.PropTypes.any
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
  onAdd: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onAdd: (topic) => {
      const {currentUser, item} = topic.props
      dispatch(addTopic(item))
    },
    onRemove: (topic) => {
      const {currentUser, item} = topic.props
      dispatch(removeTopic(item))
    },
    onSubmitForm: (evt) => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(loadFeeds())
    },
    onLoad: () => {
      dispatch(loadRepos())
    },
    onReady: () => {
      dispatch(loadFeeds())
      dispatch(loadRepos())
      // dispatch(loadRepos, loadFeeds)
      // return bindActionCreators(Object.assign({}, loadFeeds, loadRepos), dispatch)
    }
  }
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  channels: makeSelectFeeds(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ChannelsPage)
