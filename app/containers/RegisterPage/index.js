/*
 * RegisterPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

import { makeSelectLoading, makeSelectError } from 'containers/App/selectors'
import H2 from 'components/H2'
import Box from 'components/Box'
import CenteredSection from './CenteredSection'
import Form from './Form'
import Input from './Input'
import Section from './Section'
import ButtonSubmit from './ButtonSubmit'
import Label from './Label'
import { sendActivationEmail, logoutUser } from '../App/actions'
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

    console.log('this.props', this.props)

    this.state = {
      token: this.props.location.query.token,
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
    const { onSubmitForm, onCancel } = this.props
    const { emailAgain, password, timezone } = this.state

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
                        <FormattedMessage {...messages.title} />
                      </H2>
                      <div>
                        <FormattedMessage {...messages.intro} />
                      </div>
                    </CenteredSection>
                    <Section style={{margin: 0, padding: 0}}>
                      <Form id='form' style={{backgroundColor: 'rgb(251, 247, 240)', borderRadius: '5px', padding: '20px'}}>
                        <Label htmlFor='username'>
                          <FormattedMessage {...messages.labelEmail} />
                        </Label>
                        <Input
                          id='emailAgain'
                          type='text'
                          placeholder='email@site.com'
                          value={emailAgain}
                          onChange={(evt) => this.onChange('emailAgain', evt.target.value)}
                        />
                        <br />
                        <br />
                        <Label htmlFor='password'>
                          <FormattedMessage {...messages.labelPassword} />
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
                          <FormattedMessage {...messages.labelTimezone} />
                        </Label>
                        <TimezonePicker
                          placeholder='Select timezone...'
                          defaultValue={timezone}
                          onChange={(evt) => this.onChange('timezone', evt.target.value)}
                        />
                        <br />
                        <br />
                        <ButtonSubmit type='button' onClick={() => onSubmitForm(this.state, this.props.locale)}><FormattedMessage {...messages.btnActivate} /></ButtonSubmit>
                        <br />
                        <br />
                        <a href='#' onClick={onCancel}><FormattedMessage {...messages.btnCancel} /></a>
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
    onCancel: () => dispatch(logoutUser()),
    onSubmitForm: (data, locale) => {
      dispatch(sendActivationEmail({
        token: data.token,
        email: data.emailAgain,
        password: data.password,
        timezone: data.timezone,
        locale: locale
      }))
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
