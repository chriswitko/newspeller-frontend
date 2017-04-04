/*
 * PasswordPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { browserHistory } from 'react-router'
import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import H2 from 'components/H2'
import SpaceWrapper from 'components/SpaceWrapper'
import CenteredSection from 'components/CenteredSection'
import Input from 'components/Input'
import Section from 'components/Section'
import ButtonSubmit from 'components/ButtonSubmit'
import Label from 'components/Label'
import { changeUsername, changePassword, resetPassword, savePassword, reportError } from './actions'
import { makeSelectUsername, makeSelectReset, makeSelectPassword, makeSelectError, makeSelectLoading, makeSelectUpdated } from './selectors'
import { Row, Col } from 'react-grid-system'
import Div from 'components/Div'
import Alert from 'components/Alert'

export class PasswordPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps (nextProps) {
    if (nextProps.updated) {
      browserHistory.push('/signin')
    }
  }

  passwordForm () {
    return (
      <form id='formPassword' onSubmit={this.props.onSubmitPassword}>
        <Div>
          { this.props.error ? <Div><Alert>{ this.props.intl.formatMessage(messages[this.props.error]) }</Alert></Div> : '' }
          <Label htmlFor='password'>
            <FormattedMessage {...messages.labelNewPassword} />
          </Label>
          <Input
            id='token'
            type='hidden'
            value={this.props.location.query}
          />
          <Input
            id='password'
            type='password'
            placeholder='****'
            value={this.props.password}
            autoComplete='off'
            onChange={this.props.onChangePassword}
          />
        </Div>
        <br />
        <ButtonSubmit type='submit'
          disabled={this.props.loading}
        >
          <FormattedMessage {...messages.btnSave} />
        </ButtonSubmit>
      </form>
    )
  }

  resetForm () {
    return (
      <form id='formReset' onSubmit={this.props.onSubmitForm}>
        <Div>
          { this.props.error ? <Div><Alert>{ this.props.intl.formatMessage(messages[this.props.error]) }</Alert></Div> : '' }
          <Label htmlFor='username'>
            <FormattedMessage {...messages.labelEmail} />
          </Label>
          <Input
            id='username'
            type='text'
            placeholder={this.props.intl.formatMessage(messages.placeholderUsername)}
            value={this.props.username}
            autoComplete='off'
            onChange={this.props.onChangeUsername}
          />
        </Div>
        <br />
        <ButtonSubmit
          type='submit'
          disabled={this.props.loading}
        >
          <FormattedMessage {...messages.btnReset} />
        </ButtonSubmit>
      </form>
    )
  }

  confirmationForm () {
    return (
      <form>
        <Div>
          { this.props.error ? <Div><Alert>{ this.props.intl.formatMessage(messages[this.props.error]) }</Alert></Div> : '' }
          <Label>
            <FormattedMessage {...messages.confirmationAboutLink} />
          </Label>
        </Div>
        <br />
        <ButtonSubmit
          type='button'
          onClick={() => this.props.onBackHome()}
          disabled={this.props.loading}
        >
          <FormattedMessage {...messages.btnSignIn} />
        </ButtonSubmit>
      </form>
    )
  }

  renderForm () {
    const { token } = this.props.location.query
    return token ? this.passwordForm() : (this.props.reset ? this.confirmationForm() : this.resetForm())
  }

  render () {
    return (
      <div>
        <Helmet
          title='Password'
        />
        <Row>
          <Col lg={6} offset={{ lg: 3 }}>
            <article>
              <div>
                <CenteredSection>
                  <H2>
                    <FormattedMessage {...messages.reset} />
                  </H2>
                </CenteredSection>
                <Section>
                  <SpaceWrapper>
                    { this.renderForm() }
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

PasswordPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  token: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func
}

export const mapDispatchToProps = dispatch => {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onBackHome: () => browserHistory.push('/signin'),
    onSubmitPassword: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      if (evt) {
        if (evt.target.password.value) {
          dispatch(savePassword(evt.target.password.value, evt.target.token.value))
        }
      }
    },
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      if (evt) {
        if (evt.target.username.value) {
          dispatch(resetPassword(evt.target.username.value))
        } else {
          dispatch(reportError('errorRequiredEmail'))
        }
      }
    }
  }
}

const mapStateToProps = createStructuredSelector({
  reset: makeSelectReset(),
  password: makeSelectPassword(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  updated: makeSelectUpdated()
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(PasswordPage))
