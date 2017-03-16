/*
 * RegisterPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectLoading, makeSelectError } from 'containers/App/selectors'
import H2 from 'components/H2'
import Box from 'components/Box'
import CenteredSection from './CenteredSection'
import Form from './Form'
import Input from './Input'
import Section from './Section'
import messages from './messages'
import ButtonSubmit from './ButtonSubmit'
import Label from './Label'
import { sendActivationEmail, updateTimezone, removeAccount } from '../App/actions'
import { makeSelectEmail, makeSelectEmailAgain, makeSelectPassword, makeSelectTimezone } from './selectors'
import { makeSelectLocale } from '../App/selectors'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'
import Logo from 'components/Logo'
import TimezonePicker from 'components/TimezonePicker'

const Wrapper = styled.div`
  max-width: calc(368px + 16px * 2);
  display: flex;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
`

export class RegisterPage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */

  constructor (props) {
    super(props)

    this.state = {
      email: window.localStorage.getItem('currentUser') || '',
      emailAgain: '',
      password: '',
      timezone: 'Europe/London'
    }
  }

  onChange (type, value) {
    let o = {}
    o[type] = value
    this.setState(o)
  }

  render () {
    const { onSubmitForm, onRemoveAccount } = this.props
    const { email, emailAgain, password, timezone } = this.state

    return (
      <Wrapper>
        <Logo bottomed />
        <Box centered>
          <Page>
            <Row>
              <Column lg={12}>
                <article>
                  <Helmet
                    title='Register'
                    meta={[
                      { name: 'description', content: 'A React.js Boilerplate application homepage chris' }
                    ]}
                  />
                  <div>
                    <CenteredSection>
                      <H2>
                        Welcome to The Newspeller
                      </H2>
                      <div>
                        Enter your email address again, create password and select your timezone.
                      </div>
                    </CenteredSection>
                    <Section style={{margin: 0, padding: 0}}>
                      <Form id='form' style={{backgroundColor: 'rgb(251, 247, 240)', borderRadius: '5px', padding: '20px'}}>
                        <Label htmlFor='username'>
                          <FormattedMessage {...messages.trymeMessage} />
                        </Label>
                        <Input
                          id='email'
                          type='text'
                          placeholder='Your email address'
                          value={email}
                          readonly='true'
                          disabled='true'
                          onChange={(evt) => this.onChange('email', email)}
                        />
                        <br />
                        <br />
                        <Label htmlFor='username'>
                          Enter your email address again
                        </Label>
                        <Input
                          id='emailAgain'
                          type='text'
                          placeholder='Your email address'
                          value={emailAgain}
                          onChange={(evt) => this.onChange('emailAgain', evt.target.value)}
                        />
                        <br />
                        <br />
                        <Label htmlFor='password'>
                          Password
                        </Label>
                        <Input
                          id='password'
                          type='password'
                          value={password}
                          onChange={(evt) => this.onChange('password', evt.target.value)}
                        />
                        <br />
                        <br />
                        <Label htmlFor='password'>
                          Timezone
                        </Label>
                        <TimezonePicker
                          placeholder='Select timezone...'
                          defaultValue={timezone}
                          onChange={(evt) => this.onChange('timezone', evt.target.value)}
                        />
                        <small>Timezone will help us to deliver your email on time.</small>
                        <br />
                        <br />
                        <ButtonSubmit type='button' onClick={() => onSubmitForm(this.state, this.props.locale)}>Activate my email &raquo;</ButtonSubmit>
                        <br />
                        <br />
                        <a href='#' onClick={onRemoveAccount}>or Cancel</a>
                      </Form>
                    </Section>
                  </div>
                </article>
              </Column>
            </Row>
          </Page>
        </Box>
      </Wrapper>
    )
  }
}

RegisterPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onRemoveAccount: () => dispatch(removeAccount()),
    onSubmitForm: (data, locale) => {
      dispatch(sendActivationEmail({
        email: data.email,
        password: data.password,
        timezone: data.timezone,
        locale: locale
      }))
      dispatch(updateTimezone(data.timezone))
    }
  }
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  email: makeSelectEmail(),
  emailAgain: makeSelectEmailAgain(),
  password: makeSelectPassword(),
  timezone: makeSelectTimezone(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
