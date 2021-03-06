/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl'

export default defineMessages({
  title: {
    id: 'newspeller.containers.RegisterPage.title',
    defaultMessage: 'Welcome to The Newspeller'
  },
  intro: {
    id: 'newspeller.containers.RegisterPage.intro',
    defaultMessage: 'Create your password and select your timezone.'
  },
  labelEmail: {
    id: 'newspeller.containers.RegisterPage.labelEmail',
    defaultMessage: 'Enter your email address again'
  },
  labelPassword: {
    id: 'newspeller.containers.RegisterPage.labelPassword',
    defaultMessage: 'Create password'
  },
  labelTimezone: {
    id: 'newspeller.containers.RegisterPage.labelTimezone',
    defaultMessage: 'What is your time zone?'
  },
  btnActivate: {
    id: 'newspeller.containers.RegisterPage.btnActivate',
    defaultMessage: 'Activate my email'
  },
  btnCancel: {
    id: 'newspeller.containers.RegisterPage.btnCancel',
    defaultMessage: 'or Cancel'
  },
  filterByLang: {
    id: 'newspeller.containers.RegisterPage.filterByLang',
    defaultMessage: 'Select your preferred language '
  },
  langEnglish: {
    id: 'newspeller.containers.RegisterPage.langEnglish',
    defaultMessage: 'English'
  },
  langPolish: {
    id: 'newspeller.containers.RegisterPage.langPolish',
    defaultMessage: 'Polish'
  },
  errorRequiredFields: {
    id: 'newspeller.containers.RegisterPage.errorRequiredFields',
    defaultMessage: 'Missing required fields'
  },
  btnPleaseWait: {
    id: 'newspeller.containers.RegisterPage.btnPleaseWait',
    defaultMessage: 'Please wait ...'
  }
})
