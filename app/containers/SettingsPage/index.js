/*
 * SettingsPage
 *
 */

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import { makeSelectLoading, makeSelectError, makeSelectDays, makeSelectHours, makeSelectTimezone, makeSelectLanguage } from './selectors'

import { loadUserData, changeTime, addNewHour, removeDay, addDay, removeHour, updateTimezone, removeAccount, changeUserLanguage } from './actions'

import { Row, Col } from 'react-grid-system'
import H2 from 'components/H2'
import ReposDays from 'components/ReposDays'
import ReposHours from 'components/ReposHours'
import TimezonePicker from 'components/TimezonePicker'
import DropDownPicker from 'components/DropDownPicker'
import ButtonSubmit from 'components/ButtonSubmit'
import Div from 'components/Div'
import Small from 'components/Small'
import Label from 'components/Label'
import DropDownObjectPicker from 'components/DropDownObjectPicker'
import SpaceWrapper from 'components/SpaceWrapper'

export class SettingsPage extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      hour: '07',
      minute: '00'
    }
  }

  onChangeTime = (type, value) => {
    switch (type) {
      case 'hour':
        this.setState(() => ({hour: value}))
        break
      case 'minute':
        this.setState(() => ({minute: value}))
        break
      default:
        break
    }
  }

  onChangeHour = (e) => {
    this.onChangeTime('hour', e.target.value)
  }

  onChangeMinute = (e) => {
    this.onChangeTime('minute', e.target.value)
  }

  componentDidMount () {
    this.props.onLoad()
  }

  defaultHours = [this.props.intl.formatMessage(messages.hh), '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

  defaultValues = [{
    name: this.props.intl.formatMessage(messages.langEnglish), value: 'en'
  }, {
    name: this.props.intl.formatMessage(messages.langPolish), value: 'pl'
  }]

  page () {
    const { loading, error, days, hours, timezone, language, onRemoveDay, onAddDay, onRemoveHour, onRemoveAccount, onChangeTimezone, onChangeLanguage, intl } = this.props
    const { hour, minute } = this.state

    const reposDaysProps = {
      onRemoveHour,
      onAddDay,
      onRemoveDay,
      loading,
      error,
      days,
      hours,
      intl
    }

    return (
      this.props.loading ? <SpaceWrapper strong><FormattedMessage {...messages.loading} /></SpaceWrapper> : this.props.error ? <SpaceWrapper strong>Something went wrong, please try again!</SpaceWrapper> : (
        <div>
          <SpaceWrapper header>
            <Label><FormattedMessage {...messages.when} /></Label>
          </SpaceWrapper>
          <SpaceWrapper>
            <Row>
              <Col>
                <ReposDays {...reposDaysProps} />
              </Col>
            </Row>
          </SpaceWrapper>
          <SpaceWrapper header>
            <Label><FormattedMessage {...messages.andTime} /></Label>
          </SpaceWrapper>
          <SpaceWrapper>
            <Row>
              <Col>
                <Div>
                  <ReposHours {...reposDaysProps} />
                </Div>
                <form id='form'>
                  <div style={{marginBottom: '10px'}}>
                    <label htmlFor='time'>
                      <FormattedMessage {...messages.newTime} />
                    </label>
                  </div>
                  <DropDownPicker
                    placeholder='HH'
                    defaultValues={this.defaultHours}
                    defaultValue={hour}
                    onChange={this.onChangeHour}
                  />
                  <DropDownPicker
                    placeholder='MM'
                    defaultValues={['MM', '00', '15', '30', '45']}
                    defaultValue={minute}
                    onChange={this.onChangeMinute}
                  />
                  <ButtonSubmit type='button' onClick={() => this.props.onSubmitForm(hour, minute)}><FormattedMessage {...messages.btnAdd} /></ButtonSubmit>
                </form>
              </Col>
            </Row>
          </SpaceWrapper>
          <SpaceWrapper header>
            <Label><FormattedMessage {...messages.timezone} /></Label>
          </SpaceWrapper>
          <SpaceWrapper>
            <Row>
              <Col>
                <TimezonePicker
                  placeholder='Select timezone...'
                  defaultValue={timezone}
                  onChange={onChangeTimezone}
                />
              </Col>
            </Row>
          </SpaceWrapper>
          <SpaceWrapper header>
            <Label><FormattedMessage {...messages.filterByLang} /></Label>
          </SpaceWrapper>
          <SpaceWrapper>
            <Row>
              <Col>
                <Div>
                  <DropDownObjectPicker
                    placeholder='Filter by language'
                    defaultValues={this.defaultValues}
                    defaultValue={language}
                    onChange={onChangeLanguage}
                  />
                </Div>
              </Col>
            </Row>
          </SpaceWrapper>
          <SpaceWrapper>
            {!loading ? (
              <Row>
                <Col>
                  <Small><a href='#' onClick={onRemoveAccount}><FormattedMessage {...messages.removeLink} /></a></Small>
                </Col>
              </Row>
              ) : ''}
          </SpaceWrapper>
        </div>
    ))
  }

  render () {
    return (
      <div>
        <Helmet
          title='Settings'
        />
        <Row>
          <Col>
            <article>
              <SpaceWrapper bg='#4745d1' color='white'>
                <Div>
                  <H2>
                    <FormattedMessage {...messages.title} />
                  </H2>
                  <div>
                    <FormattedMessage {...messages.intro} />
                  </div>
                </Div>
              </SpaceWrapper>
              { this.page() }
            </article>
          </Col>
        </Row>
      </div>
    )
  }
}

SettingsPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  days: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
    React.PropTypes.any
  ]),
  hours: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
    React.PropTypes.any
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeTime: React.PropTypes.func
}

export const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeLanguage: (evt) => dispatch(changeUserLanguage(evt.target.value)),
    onRemoveAccount: () => dispatch(removeAccount()),
    onRemoveHour: (hour) => dispatch(removeHour(hour)),
    onAddDay: (day) => dispatch(addDay(day)),
    onRemoveDay: (day) => dispatch(removeDay(day)),
    onChangeTimezone: (evt) => dispatch(updateTimezone(evt.target.value)),
    onChangeTime: (evt) => dispatch(changeTime(evt.target.value)),
    onSubmitForm: (hour, minute) => dispatch(addNewHour(`${hour}:${minute}`)),
    onLoad: () => dispatch(loadUserData())
  }
}

const mapStateToProps = createStructuredSelector({
  language: makeSelectLanguage(),
  timezone: makeSelectTimezone(),
  days: makeSelectDays(),
  hours: makeSelectHours(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SettingsPage))
