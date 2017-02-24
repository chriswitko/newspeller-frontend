/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

// console.log('process', process.env)

import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectRepos, makeSelectLoading, makeSelectError, makeSelectNextAt } from 'containers/App/selectors'
import H2 from 'components/H2'
import ReposList from 'components/ReposList'
import CenteredSection from './CenteredSection'
import Section from './Section'
import messages from './messages'
import { loadRepos, removeTopic, addTopic, logoutUser } from '../App/actions'
import { changeUsername } from './actions'
import { makeSelectUsername } from './selectors'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

  render () {
    const { loading, error, repos, onRemove, nextAt, handleLogout } = this.props
    const reposListProps = {
      nextAt,
      onRemove,
      loading,
      error,
      repos
    }

    return (
      <article>
        <Helmet
          title='My Subscriptions'
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage chris' }
          ]}
        />
        <div>
          <a href='#' onClick={handleLogout}>
          Logout
          </a>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <div>Next delivery at: {nextAt}</div>
            <br />
            <ReposList {...reposListProps} />
          </Section>
        </div>
      </article>
    )
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
    React.PropTypes.any
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
  handleLogout: React.PropTypes.func,
  onRemove: React.PropTypes.func,
  onAdd: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    handleLogout: () => {
      dispatch(logoutUser())
    },
    onAdd: (topic) => {
      const {item} = topic.props
      dispatch(addTopic(item))
    },
    onRemove: (topic) => {
      const {item} = topic.props
      dispatch(removeTopic(item))
    },
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(loadRepos())
    }
  }
}

const mapStateToProps = createStructuredSelector({
  nextAt: makeSelectNextAt(),
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
