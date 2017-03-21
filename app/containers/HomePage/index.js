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

import { makeSelectRepos, makeSelectLoading, makeSelectError, makeSelectNextAt, makeSelectSubscriptions, makeSelectTimezone, makeSelectConfirmedAt } from 'containers/App/selectors'
import H2 from 'components/H2'
import Box from 'components/Box'
import Alert from 'components/Alert'
import ReposList from 'components/ReposList'
import Section from './Section'
import messages from './messages'
import { loadRepos, removeTopic, addTopic } from '../App/actions'
import { changeUsername } from './actions'
import { makeSelectUsername } from './selectors'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page, Row, Column } from 'hedron'
import { browserHistory, Link } from 'react-router'
import Moment from 'react-moment'
import ButtonSubmit from 'components/ButtonSubmit'
import CenteredSection from './CenteredSection'

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
    const { loading, error, repos, onRemove, onAdd, nextAt, timezone, subscriptions, confirmedAt } = this.props
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

    const lastTime = new Date(nextAt).getTime()
    const now = new Date().getTime()

    const showConfirmationAlert = () => {
      if (!loading && !confirmedAt) {
        return (
          <Alert>
            We sent you an email with a link to verify your email address. Please click the received link to activate your profile &mdash; <a href=''>Resend</a>
          </Alert>
        )
      }
    }

    const getNextDelivery = () => {
      const goToChannels = () => {
        browserHistory.push('/channels')
      }

      const goToSettings = () => {
        browserHistory.push('/settings')
      }

      if (!loading) {
        if (repos.length) {
          if (nextAt) {
            if (lastTime < now) {
              return ''
            } else {
              return (
                <div>
                  {confirmedAt ? <p>Next delivery <strong><Moment fromNow tz={timezone}>{nextAt}</Moment></strong> <small>(<Moment format='YYYY/MM/DD HH:mm' tz={timezone}>{nextAt}</Moment>, timezone: {timezone})</small></p> : <p>We will start delivering emails when you will confirm your email address first.</p>}
                  <CenteredSection>
                    <br />
                    <ButtonSubmit onClick={goToChannels}><FormattedMessage {...messages.btnChannels} /></ButtonSubmit>
                    &nbsp;&nbsp;
                    <ButtonSubmit onClick={goToSettings}><FormattedMessage {...messages.btnSettings} /></ButtonSubmit>
                  </CenteredSection>
                </div>
              )
            }
          } else {
            if (repos.length) {
              return <div>Hi! <strong>Please setup your schedule</strong>. You can decide when and what time you wish to receive your newsletter. - <Link to='settings'>Manage schedule</Link></div>
            } else {
              return <div>Hi! <strong>Please setup your schedule</strong>. You can decide when and what time you wish to receive your newsletter. - <Link to='settings'>Manage schedule</Link>. You can also decide what sources you wish to subscribe to - <Link to='channels'>Add channels</Link></div>
            }
          }
        } else {
          return (
            <div>
              Hi! <strong>Looks like you do not subscribe any channel.</strong> Start now by adding your favourite channels to start receiving your email.
              <div>
                <br />
                <ButtonSubmit onClick={goToChannels}>Search for channels</ButtonSubmit>
              </div>
            </div>
          )
        }
      } else {
        return <p><FormattedMessage {...messages.loading} /></p>
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
                  {showConfirmationAlert()}
                  <Section>
                    <H2>
                      <FormattedMessage {...messages.title} />
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
      dispatch(addTopic(topic))
    },
    onRemove: (topic) => {
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
  confirmedAt: makeSelectConfirmedAt(),
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
