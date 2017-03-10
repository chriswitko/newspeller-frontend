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

import { makeSelectRepos, makeSelectLoading, makeSelectError, makeSelectNextAt, makeSelectSubscriptions, makeSelectTimezone } from 'containers/App/selectors'
import H2 from 'components/H2'
import Box from 'components/Box'
import ReposList from 'components/ReposList'
import CenteredSection from './CenteredSection'
import Section from './Section'
import messages from './messages'
import { loadRepos, removeTopic, addTopic } from '../App/actions'
import { changeUsername } from './actions'
import { makeSelectUsername } from './selectors'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page, Row, Column } from 'hedron'
import { Link } from 'react-router'
import Moment from 'react-moment'

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
    const { loading, error, repos, onRemove, onAdd, nextAt, timezone, subscriptions } = this.props
    const reposListProps = {
      timezone,
      nextAt,
      onRemove,
      onAdd,
      loading,
      error,
      repos,
      subscriptions
    }

    const getNextDelivery = () => {
      if (!loading) {
        if (nextAt) {
          return <div>Next delivery <strong><Moment fromNow tz={timezone}>{nextAt}</Moment></strong> <small>(<Moment format='YYYY/MM/DD HH:mm' tz={timezone}>{nextAt}</Moment>, {timezone}) - <Link to='settings'>Manage schedule</Link></small></div>
        } else {
          if (repos.length) {
            return <div>Hi! <strong>Please setup your schedule</strong>. You can decide when and what time you wish to receive your newsletter. - <Link to='settings'>Manage schedule</Link></div>
          } else {
            return <div>Hi! <strong>Please setup your schedule</strong>. You can decide when and what time you wish to receive your newsletter. - <Link to='settings'>Manage schedule</Link>. You can also decide what sources you wish to subscribe to - <Link to='channels'>Add channels</Link></div>
          }
        }
      } else {
        return <div>Loading your settings. Please wait...</div>
      }
    }

    return (
      <Box fullScreen>
        <Page style={{display: 'flex', flexDirection: 'column'}}>
          <Row>
            <Header />
          </Row>
          <Row style={{flex: 1}}>
            <Column>
              <article>
                <Helmet
                  title='My Subscriptions'
                  meta={[
                    { name: 'description', content: 'A React.js Boilerplate application homepage chris' }
                  ]}
                />
                <div>
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
                    {getNextDelivery()}
                    <br />
                    <ReposList {...reposListProps} />
                  </Section>
                </div>
              </article>
            </Column>
          </Row>
          <Row alignSelf='flex-start' style={{width: '100%'}}>
            <Footer />
          </Row>
        </Page>
      </Box>
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
  subscriptions: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
    React.PropTypes.any
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
  onRemove: React.PropTypes.func,
  onAdd: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onAdd: (topic) => {
      console.log('add topic', topic)
      // const {item} = topic.props
      dispatch(addTopic(topic))
    },
    onRemove: (topic) => {
      console.log('remove topic', topic)
      // const {item} = topic.props
      dispatch(removeTopic(topic))
    },
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(loadRepos())
    }
  }
}

const mapStateToProps = createStructuredSelector({
  timezone: makeSelectTimezone(),
  nextAt: makeSelectNextAt(),
  subscriptions: makeSelectSubscriptions(),
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
