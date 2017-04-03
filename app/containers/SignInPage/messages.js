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
  btnPleaseWait: {
    id: 'newspeller.containers.SignInPage.btnPleaseWait',
    defaultMessage: 'Please wait...'
  },
  forgotPassword: {
    id: 'newspeller.containers.SignInPage.forgotPassword',
    defaultMessage: 'Forgot password?'
  },
  placeholderUsername: {
    id: 'newspeller.global.placeholderUsername',
    defaultMessage: 'eg. email@site.com'
  },
  errorRequiredFields: {
    id: 'newspeller.containers.SignInPage.errorRequiredFields',
    defaultMessage: 'Missing required fields'
  },
  errorMissingUser: {
    id: 'newspeller.containers.SignInPage.errorMissingUser',
    defaultMessage: 'User does not exists'
  }
})
