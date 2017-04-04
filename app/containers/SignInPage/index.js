/*
 * SignInPage
 */

import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router'

import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import { makeSelectLoading, makeSelectError, makeSelectToken, makeSelectUsername, makeSelectPassword } from './selectors'
import { authorizeUser, missingFields, changeUsername, changePassword } from './actions'

import { Row, Col } from 'react-grid-system'

import H2 from 'components/H2'
import CenteredSection from 'components/CenteredSection'
import Input from 'components/Input'
import Section from 'components/Section'
import ButtonSubmit from 'components/ButtonSubmit'
import Label from 'components/Label'
import Alert from 'components/Alert'
import Div from 'components/Div'
import SpaceWrapper from 'components/SpaceWrapper'

export class SignInPage extends React.PureComponent {
  componentWillReceiveProps (nextProps) {
    if (nextProps.token) {
      window.localStorage.setItem('currentUser', nextProps.username)
      window.localStorage.setItem('token', nextProps.token)
      window.location.href = '/home'
    }
  }

  render () {
    const { onSubmitForm, onChangeUsername, onChangePassword, username, password, error, loading, intl } = this.props

    return (
      <div>
        <Helmet
          title='Sign In'
          meta={[
            { name: 'description', content: 'Newspeller.com' }
          ]}
        />
        <Row>
          <Col lg={6} offset={{ lg: 3 }}>
            <article>
              <div>
                <CenteredSection>
                  <H2>
                    <FormattedMessage {...messages.intro} />
                  </H2>
                </CenteredSection>
                <Section>
                  <SpaceWrapper>
                    <Div>
                      <form id='form' onSubmit={onSubmitForm}>
                        { error ? <Div><Alert>{ intl.formatMessage(messages[error]) }</Alert></Div> : '' }
                        <Div>
                          <Label htmlFor='username'>
                            <FormattedMessage {...messages.labelEmail} />
                          </Label>
                          <Input
                            ref={(input) => { this.username = input }}
                            id='username'
                            type='text'
                            placeholder={intl.formatMessage(messages.placeholderUsername)}
                            autoComplete='off'
                            value={username}
                            onChange={onChangeUsername}
                          />
                        </Div>
                        <Div>
                          <Label htmlFor='password'>
                            <FormattedMessage {...messages.labelPassword} />
                          </Label>
                          <Input
                            id='password'
                            type='password'
                            value={password}
                            onChange={onChangePassword}
                          />
                        </Div>
                        <br />
                        <ButtonSubmit
                          type='submit'
                          disabled={loading}
                        >
                          <FormattedMessage {...loading ? messages.btnPleaseWait : messages.btnSignIn} />
                        </ButtonSubmit>
                      </form>
                    </Div>
                    <Link to='password'>
                      <FormattedMessage {...messages.forgotPassword} />
                    </Link>
                  </SpaceWrapper>
                </Section>
              </div>
            </article>
          </Col>
        </Row>
      </div>
    )
  }
}

SignInPage.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onSubmitForm: PropTypes.func,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      if (evt) {
        if (evt.target.username.value && evt.target.password.value) {
          dispatch(authorizeUser(evt.target.username.value, evt.target.password.value))
        } else {
          dispatch(missingFields())
        }
      }
    }
  }
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  token: makeSelectToken(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SignInPage))
