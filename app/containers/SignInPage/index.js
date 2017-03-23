/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router'

import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import { makeSelectLoading, makeSelectError, makeSelectToken, makeSelectUsername, makeSelectPassword } from './selectors'
import { authorizeUser, missingFields, changeUsername, changePassword } from './actions'

import { Page, Row, Column } from 'hedron'

import H2 from 'components/H2'
import Box from 'components/Box'
import CenteredSection from './CenteredSection'
import Form from './Form'
import Input from 'components/Input'
import Section from './Section'
import ButtonSubmit from 'components/ButtonSubmit'
import Label from 'components/Label'
import Logo from 'components/Logo'
import Alert from 'components/Alert'
import Div from 'components/Div'

import styled from 'styled-components'

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

export class SignInPage extends React.PureComponent {
  componentWillReceiveProps (nextProps) {
    if (nextProps.token) {
      window.localStorage.setItem('currentUser', nextProps.username)
      window.localStorage.setItem('token', nextProps.token)
      window.location.href = '/home'
    }
  }

  render () {
    const { onSubmitForm, onChangeUsername, onChangePassword, username, password, error, loading } = this.props

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
                      { name: 'description', content: 'Newspeller.com' }
                    ]}
                  />
                  <div>
                    <CenteredSection>
                      <H2>
                        <FormattedMessage {...messages.intro} />
                      </H2>
                    </CenteredSection>
                    <Section style={{margin: 0, padding: 0}}>
                      <Form id='form' onSubmit={this.props.onSubmitForm} style={{backgroundColor: 'rgb(251, 247, 240)', borderRadius: '5px', padding: '20px'}}>
                        { error ? <Div><Alert>{ error }</Alert></Div> : '' }
                        <Label htmlFor='username'>
                          <FormattedMessage {...messages.labelEmail} />
                        </Label>
                        <Input
                          id='username'
                          type='text'
                          placeholder={this.props.intl.formatMessage(messages.placeholderUsername)}
                          autoComplete='off'
                          value={username}
                          onChange={onChangeUsername}
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
                          onChange={onChangePassword}
                        />
                        <br />
                        <br />
                        <ButtonSubmit
                          type='submit'
                          onClick={onSubmitForm(this.form)}
                          disabled={loading}
                        >
                          <FormattedMessage {...messages.btnSignIn} />
                        </ButtonSubmit>
                      </Form>
                      <Link to='password'>
                        <FormattedMessage {...messages.forgotPassword} />
                      </Link>
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

SignInPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  token: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func
}

export function mapDispatchToProps (dispatch, ownProps) {
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

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SignInPage))
