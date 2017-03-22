/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl'

export default defineMessages({
  title: {
    id: 'newspeller.containers.HomePage.title',
    defaultMessage: 'My Subscriptions'
  },
  loading: {
    id: 'newspeller.containers.HomePage.loading',
    defaultMessage: 'Loading your settings. Please wait...'
  },
  btnChannels: {
    id: 'newspeller.containers.HomePage.btnChannels',
    defaultMessage: 'Add more...'
  },
  btnSettings: {
    id: 'newspeller.containers.HomePage.btnSettings',
    defaultMessage: 'Settings'
  },
  resendMessage: {
    id: 'newspeller.containers.HomePage.resendMessage',
    defaultMessage: 'We sent you an email with a link to verify your email address. Please click the received link to activate your profile again'
  },
  btnResend: {
    id: 'newspeller.containers.HomePage.btnResend',
    defaultMessage: 'Send again'
  },
  nextDelivery: {
    id: 'newspeller.containers.HomePage.nextDelivery',
    defaultMessage: 'Next delivery'
  },
  yourTimezone: {
    id: 'newspeller.containers.HomePage.yourTimezone',
    defaultMessage: 'your time zone'
  },
  weWillStart: {
    id: 'newspeller.containers.HomePage.weWillStart',
    defaultMessage: 'We will start delivering emails when you will confirm your email address first.'
  },
  pleaseSchedule: {
    id: 'newspeller.containers.HomePage.pleaseSchedule',
    defaultMessage: 'Please setup your schedule'
  },
  hi: {
    id: 'newspeller.containers.HomePage.hi',
    defaultMessage: 'Hi!'
  },
  looksLikeNoChannels: {
    id: 'newspeller.containers.HomePage.looksLikeNoChannels',
    defaultMessage: 'Looks like you do not subscribe any channel.'
  },
  startAddingChannels: {
    id: 'newspeller.containers.HomePage.startAddingChannels',
    defaultMessage: 'Start now by adding your favourite channels to start receiving your email.'
  }
})
