/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl'

export default defineMessages({
  labelNewPassword: {
    id: 'newspeller.containers.PasswordPage.labelNewPassword',
    defaultMessage: 'Enter your new password'
  },
  btnSave: {
    id: 'newspeller.containers.PasswordPage.btnSave',
    defaultMessage: 'Save'
  },
  labelEmail: {
    id: 'newspeller.containers.PasswordPage.labelEmail',
    defaultMessage: 'Enter your email address'
  },
  btnReset: {
    id: 'newspeller.containers.PasswordPage.btnReset',
    defaultMessage: 'Reset'
  },
  confirmationAboutLink: {
    id: 'newspeller.containers.PasswordPage.confirmationAboutLink',
    defaultMessage: 'Check your inbox and click link to reset password.'
  },
  btnSignIn: {
    id: 'newspeller.containers.PasswordPage.btnSignIn',
    defaultMessage: 'Sign in'
  },
  reset: {
    id: 'newspeller.containers.PasswordPage.reset',
    defaultMessage: 'Reset your password'
  },
  placeholderUsername: {
    id: 'newspeller.global.placeholderUsername',
    defaultMessage: 'eg. email@site.com'
  },
  errorRequiredEmail: {
    id: 'newspeller.global.errorRequiredUsername',
    defaultMessage: 'Email address is required'
  },
  errorEmailNotExists: {
    id: 'newspeller.global.errorEmailNotExists',
    defaultMessage: 'Email address does not exists'
  },
  errorRequiredPassword: {
    id: 'newspeller.global.errorRequiredPassword',
    defaultMessage: 'Password is required'
  },
  errorGeneralError: {
    id: 'newspeller.global.errorGeneralError',
    defaultMessage: 'Error. Please try again.'
  }
})
