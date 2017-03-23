/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl'

export default defineMessages({
  intro: {
    id: 'newspeller.containers.SignInPage.intro',
    defaultMessage: 'Sign In to The Newspeller'
  },
  labelEmail: {
    id: 'newspeller.containers.SignInPage.labelEmail',
    defaultMessage: 'Email'
  },
  labelPassword: {
    id: 'newspeller.containers.SignInPage.labelPassword',
    defaultMessage: 'Password'
  },
  btnSignIn: {
    id: 'newspeller.containers.SignInPage.btnSignIn',
    defaultMessage: 'Log In'
  },
  forgotPassword: {
    id: 'newspeller.containers.SignInPage.forgotPassword',
    defaultMessage: 'Forgot password?'
  },
  placeholderUsername: {
    id: 'newspeller.containers.SignInPage.placeholderUsername',
    defaultMessage: 'eg. email@site.com'
  }
})
