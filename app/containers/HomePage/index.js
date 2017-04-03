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

import { makeSelectRepos, makeSelectLoading, makeSelectError, makeSelectNextAt, makeSelectSubscriptions, makeSelectTimezone, makeSelectConfirmedAt, makeSelectToken, makeSelectLanguage, makeSelectEmail } from 'containers/App/selectors'
import H2 from 'components/H2'
import Box from 'components/Box'
import Alert from 'components/Alert'
import ReposList from 'components/ReposList'
import Section from './Section'
import messages from './messages'
import { loadUserData, removeTopic, addTopic, resendActivationEmail } from '../App/actions'
import { changeUsername } from './actions'
import { makeSelectUsername } from './selectors'
import Header from 'components/Header'
import { Page, Row, Column } from 'hedron'
import { browserHistory, Link } from 'react-router'
import Moment from 'react-moment'
import ButtonSubmit from 'components/ButtonSubmit'
import CenteredSection from './CenteredSection'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    this.state = {
      resent: false
    }
  }

  componentDidMount () {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

  render () {
    const { loading, error, repos, onRemove, onAdd, onResend, nextAt, timezone, subscriptions, token, language, email, confirmedAt } = this.props
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
    const { resent } = this.state

    const showConfirmationAlert = () => {
      if (!loading && !confirmedAt && !resent) {
        return (
          <Alert>
            <FormattedMessage {...messages.resendMessage} /> &mdash; <a href='#' onClick={() => {
              onResend({
                token: token,
                email: email,
                language: language
              })
              this.setState(() => ({resent: true}))
            }
            }><FormattedMessage {...messages.btnResend} /></a>
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
                  {confirmedAt ? <p><FormattedMessage {...messages.nextDelivery} /> <strong><Moment fromNow tz={timezone}>{nextAt}</Moment></strong> <small>(<Moment format='YYYY/MM/DD HH:mm' tz={timezone}>{nextAt}</Moment>, <FormattedMessage {...messages.yourTimezone} />: {timezone})</small></p> : <p><FormattedMessage {...messages.weWillStart} /></p>}
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
              return <div><FormattedMessage {...messages.hi} />Hi! <strong><FormattedMessage {...messages.pleaseSchedule} /></strong> - <Link to='settings'><FormattedMessage {...messages.btnSettings} /></Link></div>
            } else {
              return <div><FormattedMessage {...messages.hi} />Hi! <strong><FormattedMessage {...messages.pleaseSchedule} /></strong> - <Link to='settings'><FormattedMessage {...messages.btnSettings} /></Link> / <Link to='channels'><FormattedMessage {...messages.btnChannels} /></Link></div>
            }
          }
        } else {
          return (
            <div>
              <FormattedMessage {...messages.hi} /> <strong><FormattedMessage {...messages.looksLikeNoChannels} /></strong> <FormattedMessage {...messages.startAddingChannels} />
              <div>
                <br />
                <ButtonSubmit onClick={goToChannels}><FormattedMessage {...messages.btnChannels} /></ButtonSubmit>
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
    onResend: (data) => {
      dispatch(resendActivationEmail({
        token: data.token,
        email: data.email,
        locale: data.language
      }))
    },
    onAdd: (topic) => {
      dispatch(addTopic(topic))
    },
    onRemove: (topic) => {
      dispatch(removeTopic(topic))
    },
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(loadUserData())
    }
  }
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  language: makeSelectLanguage(),
  token: makeSelectToken(),
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
