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
import { authorizeUser } from '../App/actions'
import { changeUsername, changePassword } from './actions'
import { makeSelectUsername, makeSelectPassword, makeSelectToken } from './selectors'
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

export class SignInPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.token) {
      window.location.href = '/'
    }
  }

  render () {
    const { onSubmitForm, username, password } = this.props

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
                        Sign In to adjust time and content of your newsletter
                      </H2>
                    </CenteredSection>
                    <Section style={{margin: 0, padding: 0}}>
                      <Form id='form' onSubmit={this.props.onSubmitForm} style={{backgroundColor: 'rgb(251, 247, 240)', borderRadius: '5px', padding: '20px'}}>
                        <Label htmlFor='username'>
                          <FormattedMessage {...messages.trymeMessage} />
                        </Label>
                        <Input
                          id='username'
                          type='text'
                          placeholder='Your email address'
                          value={username}
                          onChange={this.props.onChangeUsername}
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
                          onChange={this.props.onChangePassword}
                        />
                        <br />
                        <br />
                        <ButtonSubmit type='submit' onClick={onSubmitForm(this.form)}>Log in</ButtonSubmit>
                      </Form>
                      <a href='#'>
                        Forgot password?
                      </a>
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
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  token: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      if (evt) {
        if (evt.target.username.value && evt.target.password.value) {
          dispatch(authorizeUser(evt.target.username.value, evt.target.password.value))
        }
      }
    }
  }
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage)
