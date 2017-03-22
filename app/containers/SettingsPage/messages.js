/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl'

export default defineMessages({
  title: {
    id: 'newspeller.containers.SettingsPage.title',
    defaultMessage: 'Settings'
  },
  intro: {
    id: 'newspeller.containers.SettingsPage.intro',
    defaultMessage: 'Define what days and times you wish to receive emails.'
  },
  loading: {
    id: 'newspeller.containers.SettingsPage.loading',
    defaultMessage: 'Loading your settings. Please wait...'
  },
  when: {
    id: 'newspeller.containers.SettingsPage.when',
    defaultMessage: 'When would you like to receive emails...'
  },
  timezone: {
    id: 'newspeller.containers.SettingsPage.timezone',
    defaultMessage: 'What is your time zone?'
  },
  andTime: {
    id: 'newspeller.containers.SettingsPage.andTime',
    defaultMessage: '... and at what time?'
  },
  newTime: {
    id: 'newspeller.containers.SettingsPage.newTime',
    defaultMessage: 'Wish to receive your newsletter often, just add new time below.'
  },
  btnAdd: {
    id: 'newspeller.containers.SettingsPage.btnAdd',
    defaultMessage: 'Add'
  },
  removeLink: {
    id: 'newspeller.containers.SettingsPage.removeLink',
    defaultMessage: 'Remove my email address from The Newspeller database'
  },
  hh: {
    id: 'newspeller.containers.SettingsPage.hh',
    defaultMessage: 'HH'
  },
  filterByLang: {
    id: 'newspeller.containers.SettingsPage.filterByLang',
    defaultMessage: 'Select your preferred language '
  },
  langEnglish: {
    id: 'newspeller.containers.SettingsPage.langEnglish',
    defaultMessage: 'English'
  },
  langPolish: {
    id: 'newspeller.containers.SettingsPage.langPolish',
    defaultMessage: 'Polish'
  }
})
