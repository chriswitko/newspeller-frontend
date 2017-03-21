/*
 * SettingsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectDays, makeSelectHours, makeSelectLoading, makeSelectError, makeSelectTimezone, makeSelectGroupBy } from 'containers/App/selectors'
import H2 from 'components/H2'
import Box from 'components/Box'
import ReposDays from 'components/ReposDays'
import ReposHours from 'components/ReposHours'
import TimezonePicker from 'components/TimezonePicker'
import DropDownPicker from 'components/DropDownPicker'
import ButtonSubmit from './ButtonSubmit'

import AtPrefix from './AtPrefix'
import Div from 'components/Div'
import Small from 'components/Small'
import Form from './Form'
import messages from './messages'
import { loadRepos, addNewHour, removeDay, addDay, removeHour, updateTimezone, removeAccount } from '../App/actions'
import { changeTime } from './actions'
import { makeSelectUsername } from './selectors'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page, Row, Column } from 'hedron'
import Label from 'components/Label'

export class SettingsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor () {
    super()

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

  render () {
    const { loading, error, days, hours, timezone, onRemoveDay, onAddDay, onRemoveHour, onRemoveAccount, onChangeTimezone, intl } = this.props
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

    const defaultHours = [this.props.intl.formatMessage(messages.hh), '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

    const page = loading ? <div><FormattedMessage {...messages.loading} /></div> : error ? <div>Something went wrong, please try again!</div> : (
      <Div>
        <Div>
          <Column style={{padding: '0'}}>
            <div>
              <Label><FormattedMessage {...messages.timezone} /></Label>
            </div>
            <TimezonePicker
              placeholder='Select timezone...'
              defaultValue={timezone}
              onChange={onChangeTimezone}
            />
          </Column>
        </Div>
        <br />
        <Div>
          <Column style={{padding: '0'}}>
            <div>
              <Label><FormattedMessage {...messages.when} /></Label>
            </div>
            <ReposDays {...reposDaysProps} />
          </Column>
        </Div>
        <br />
        <Div>
          <Column style={{padding: '0'}}>
            <div>
              <Label><FormattedMessage {...messages.andTime} /></Label>
            </div>
            <Div>
              <ReposHours {...reposDaysProps} />
            </Div>
            <Form id='form' style={{backgroundColor: 'rgb(251, 247, 240)', borderRadius: '5px', padding: '20px', display: 'table', width: '100%'}}>
              <div style={{marginBottom: '10px'}}>
                <label htmlFor='time'>
                  <AtPrefix>
                    <FormattedMessage {...messages.newTime} />
                  </AtPrefix>
                </label>
              </div>
              <DropDownPicker
                placeholder='HH'
                defaultValues={defaultHours}
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
            </Form>
          </Column>
        </Div>
      </Div>
    )

    return (
      <Box fullScreen>
        <Page style={{display: 'flex', flexDirection: 'column'}}>
          <Row>
            <Header />
          </Row>
          <Row style={{flex: 1}}>
            <Column>
              <article>
                <Helmet
                  title='Settings'
                  meta={[
                    { name: 'description', content: 'A React.js Boilerplate application homepage chris' }
                  ]}
                />
                <div>
                  <Div>
                    <H2>
                      <FormattedMessage {...messages.title} />
                    </H2>
                    <div>
                      <p>
                        <FormattedMessage {...messages.intro} />
                      </p>
                    </div>
                  </Div>
                  <br />
                  {page}
                </div>
              </article>
            </Column>
            {!loading ? (
              <Column>
                <Small><a href='#' onClick={onRemoveAccount}><FormattedMessage {...messages.removeLink} /></a></Small>
              </Column>
            ) : ''}
          </Row>
          <Row alignSelf='flex-start' style={{width: '100%'}}>
            <Footer />
          </Row>
        </Page>
      </Box>
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

export function mapDispatchToProps (dispatch, props) {
  return {
    onRemoveAccount: () => dispatch(removeAccount()),
    onRemoveHour: (hour) => dispatch(removeHour(hour)),
    onAddDay: (day) => dispatch(addDay(day)),
    onRemoveDay: (day) => dispatch(removeDay(day)),
    onChangeTimezone: (evt) => dispatch(updateTimezone(evt.target.value)),
    onChangeTime: (evt) => dispatch(changeTime(evt.target.value)),
    onSubmitForm: (hour, minute) => dispatch(addNewHour(`${hour}:${minute}`)),
    onLoad: () => dispatch(loadRepos())
  }
}

const mapStateToProps = createStructuredSelector({
  groupBy: makeSelectGroupBy(),
  timezone: makeSelectTimezone(),
  days: makeSelectDays(),
  hours: makeSelectHours(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SettingsPage))
