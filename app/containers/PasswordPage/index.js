/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { browserHistory } from 'react-router'
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
import { resetPassword, savePassword } from '../App/actions'
import { changeUsername, changePassword } from './actions'
import { makeSelectUsername, makeSelectReset, makeSelectPassword } from './selectors'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'
import Logo from 'components/Logo'

const Wrapper = styled.div`
  max-width: calc(368px + 16px * 2);
  display: flex;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
`

export class PasswordPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

  render () {
    const { onSubmitForm, onSubmitPassword, backHome, username, password, reset } = this.props
    const { token } = this.props.location.query

    const passwordForm = (
      <Form id='form' onSubmit={this.props.onSubmitPassword} style={{backgroundColor: 'rgb(251, 247, 240)', borderRadius: '5px', padding: '20px'}}>
        <Label htmlFor='username'>
          <FormattedMessage {...messages.labelNewPassword} />
        </Label>
        <Input
          id='token'
          type='hidden'
          value={token}
        />
        <Input
          id='password'
          type='password'
          placeholder='****'
          value={password}
          onChange={this.props.onChangePassword}
        />
        <br />
        <br />
        <ButtonSubmit type='submit' onClick={() => onSubmitPassword(this.form)}><FormattedMessage {...messages.btnSave} />Save</ButtonSubmit>
      </Form>
    )


    const resetForm = (
      <Form id='form' onSubmit={this.props.onSubmitForm} style={{backgroundColor: 'rgb(251, 247, 240)', borderRadius: '5px', padding: '20px'}}>
        <Label htmlFor='username'>
          <FormattedMessage {...messages.labelEmail} />
        </Label>
        <Input
          id='username'
          type='text'
          placeholder='email@site.com'
          value={username}
          onChange={this.props.onChangeUsername}
        />
        <br />
        <br />
        <ButtonSubmit type='submit' onClick={() => onSubmitForm(this.form)}><FormattedMessage {...messages.btnReset} /></ButtonSubmit>
      </Form>
    )

    const confirmationForm = (
      <Form id='form' onSubmit={this.props.onSubmitForm} style={{backgroundColor: 'rgb(251, 247, 240)', borderRadius: '5px', padding: '20px'}}>
        <Label htmlFor='username'>
          <FormattedMessage {...messages.confirmationAboutLink} />
        </Label>
        <br />
        <br />
        <ButtonSubmit type='button' onClick={backHome}><FormattedMessage {...messages.btnSignIn} /></ButtonSubmit>
      </Form>
    )

    return (
      <Wrapper>
        <Logo bottomed />
        <Box centered>
          <Page>
            <Row>
              <Column lg={12}>
                <article>
                  <Helmet
                    title='Sing In'
                    meta={[
                      { name: 'description', content: 'A React.js Boilerplate application homepage chris' }
                    ]}
                  />
                  <div>
                    <CenteredSection>
                      <H2>
                        <FormattedMessage {...messages.reset} />
                      </H2>
                    </CenteredSection>
                    <Section style={{margin: 0, padding: 0}}>
                      {token ? passwordForm : (reset ? confirmationForm : resetForm) }
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

PasswordPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  token: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    backHome: () => {
      browserHistory.push('/signin')
    },
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
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(PasswordPage)
