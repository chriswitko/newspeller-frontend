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
    defaultMessage: 'Enter your email address again, create password and select your timezone.'
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
    defaultMessage: 'Timezone'
  },
  btnActivate: {
    id: 'newspeller.containers.RegisterPage.btnActivate',
    defaultMessage: 'Activate my email &raquo;'
  },
  btnCancel: {
    id: 'newspeller.containers.RegisterPage.btnCancel',
    defaultMessage: 'or Cancel'
  }
})
