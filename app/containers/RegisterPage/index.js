/*
 * RegisterPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import { changePassword, changeTimezone, changeLocale, sendActivationEmail, missingFields } from './actions'
import { makeSelectPassword, makeSelectTimezone, makeSelectLocale, makeSelectLoading, makeSelectError, makeSelectToken } from './selectors'

import { Row, Col } from 'react-grid-system'

import H2 from 'components/H2'
import Div from 'components/Div'
import CenteredSection from 'components/CenteredSection'
import Input from 'components/Input'
import ButtonSubmit from 'components/ButtonSubmit'
import Label from 'components/Label'
import SpaceWrapper from 'components/SpaceWrapper'
import TimezonePicker from 'components/TimezonePicker'
import DropDownObjectPicker from 'components/DropDownObjectPicker'
import Alert from 'components/Alert'

export class RegisterPage extends React.PureComponent {
  componentWillReceiveProps (nextProps) {
    if (nextProps.token) {
      window.localStorage.setItem('token', nextProps.token)
      window.location.href = '/home'
    }
  }

  render () {
    const { onSubmitForm, onChangeLocale, onChangeTimezone, onChangePassword, password, timezone, language, intl, error, loading } = this.props
    const { token } = this.props.location.query

    const defaultValues = [{
      name: this.props.intl.formatMessage(messages.langEnglish), value: 'en'
    }, {
      name: this.props.intl.formatMessage(messages.langPolish), value: 'pl'
    }]

    return (
      <div>
        <Row>
          <Col lg={4} offset={{ lg: 4 }}>
            <Div>
              <Helmet
                title='Register'
              />
              <div>
                <CenteredSection>
                  <Div>
                    <H2>
                      <FormattedMessage {...messages.title} />
                    </H2>
                  </Div>
                  <div>
                    <FormattedMessage {...messages.intro} />
                  </div>
                </CenteredSection>
                <SpaceWrapper>
                  <form id='form'>
                    { error ? <Div><Alert>{ intl.formatMessage(messages[error]) }</Alert></Div> : '' }
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
                    <Div>
                      <Label htmlFor='timezone'>
                        <FormattedMessage {...messages.labelTimezone} />
                      </Label>
                      <TimezonePicker
                        id='timezone'
                        placeholder='Select timezone...'
                        defaultValue={timezone}
                        onChange={onChangeTimezone}
                      />
                    </Div>
                    <Div>
                      <Label>
                        <FormattedMessage {...messages.filterByLang} />
                      </Label>
                      <DropDownObjectPicker
                        id='language'
                        placeholder='Filter by language'
                        defaultValues={defaultValues}
                        defaultValue={language}
                        onChange={onChangeLocale}
                      />
                    </Div>
                    <br />
                    <ButtonSubmit
                      type='button'
                      disabled={loading}
                      onClick={() => onSubmitForm({token, password, timezone, language})}><FormattedMessage {...loading ? messages.btnPleaseWait : messages.btnActivate} /></ButtonSubmit>
                  </form>
                </SpaceWrapper>
              </div>
            </Div>
          </Col>
        </Row>
      </div>
    )
  }
}

RegisterPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  onSubmitForm: React.PropTypes.func,
  password: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func
}

export const mapDispatchToProps = dispatch => {
  return {
    onChangeLocale: (evt) => dispatch(changeLocale(evt.target.value)),
    onChangeTimezone: (evt) => dispatch(changeTimezone(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onSubmitForm: (data) => {
      if (data.password) {
        dispatch(sendActivationEmail({
          token: data.token,
          password: data.password,
          timezone: data.timezone,
          locale: data.language
        }))
      } else {
        dispatch(missingFields())
      }
    }
  }
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  locale: makeSelectLocale(),
  language: makeSelectLocale(),
  password: makeSelectPassword(),
  timezone: makeSelectTimezone(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(RegisterPage))
