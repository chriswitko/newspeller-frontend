/*
 * SettingsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectDays, makeSelectHours, makeSelectLoading, makeSelectError, makeSelectTimezone, makeSelectGroupBy } from 'containers/App/selectors'
import { makeSelectHour } from './selectors'
import H2 from 'components/H2'
import Box from 'components/Box'
import ReposDays from 'components/ReposDays'
import ReposHours from 'components/ReposHours'
import TimezonePicker from 'components/TimezonePicker'
import DropDownPicker from 'components/DropDownPicker'
import DropDownObjectPicker from 'components/DropDownObjectPicker'
import ButtonSubmit from './ButtonSubmit'

import AtPrefix from './AtPrefix'
import CenteredSection from './CenteredSection'
import Section from './Section'
import Small from 'components/Small'
import Form from './Form'
import Input from './Input'
import messages from './messages'
import { loadRepos, addNewHour, removeDay, addDay, removeHour, updateTimezone, updateGroupBy } from '../App/actions'
import { changeTime } from './actions'
import { makeSelectUsername } from './selectors'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page, Row, Column } from 'hedron'

const API_ENDPOINT = process.env.NODE_ENV === 'development' ? window.location.origin.replace(':3000', ':3100') : 'https://api.newspeller.com'

export class SettingsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor () {
    super()

    this.state = {
      hour: '07',
      minute: '00'
    }
  }

  onChangeTime = (type, value) => {
    const update = {}
    update[type] = value
    this.setState(prevState => update)
  }

  onChangeHour = (e) => {
    this.onChangeTime('hour', e.target.value)
  }

  onChangeMinute = (e) => {
    this.onChangeTime('minute', e.target.value)
  }    

  componentDidMount () {
    // if (this.props.time && this.props.time.trim().length > 0) {
    this.props.onLoad()
    // }
  }

  render () {
    const { loading, error, days, hours, timezone, groupBy, onRemoveDay, onAddDay, onRemoveHour, onChangeGroupBy, onChangeTimezone } = this.props
    const { hour, minute, onChangeHour, onChangeMinute } = this.state
    
    const reposDaysProps = {
      onRemoveHour,
      onAddDay,
      onRemoveDay,
      loading,
      error,
      days,
      hours
    }

    const page = loading ? <div>Loading your settings. Please wait...</div> : error ? <div>Something went wrong, please try again!</div> : (
      <Section>
        <Row>
          <Column style={{padding: '0'}}>
            <H2>
              How would you like to group news?
            </H2>
            <DropDownObjectPicker
              placeholder='Group by'
              defaultValues={[{name: 'By Channels', value: 'channels'}, {name: 'By Category', value: 'category'}]}
              defaultValue={groupBy}
              onChange={onChangeGroupBy}
            />                      
          </Column>
        </Row>
        <Row>
          <Column style={{padding: '0'}}>
            <H2>
              What is your time zone?
            </H2>
            <TimezonePicker
              placeholder='Select timezone...'
              defaultValue={timezone}
              onChange={onChangeTimezone}
            />
          </Column>
        </Row>
        <Row>
          <Column style={{padding: '0'}}>
            <H2>
              When would you like to receive emails...
            </H2>
            <ReposDays {...reposDaysProps} />
          </Column>
        </Row>
        <Row>
          <Column style={{padding: '0'}}>
            <H2>
              ... and at what time?
            </H2>
            <Form id='form' style={{backgroundColor: 'rgb(251, 247, 240)', borderRadius: '5px', padding: '20px', display: 'table', width: '100%'}}>
              <div style={{marginBottom: '10px'}}>
                <label htmlFor='time'>
                  <AtPrefix>
                    Wish to receive your newsletter often, just add new time below.
                  </AtPrefix>
                </label>
              </div>
              <DropDownPicker
                placeholder='HH'
                defaultValues={['HH', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                defaultValue={hour}
                onChange={this.onChangeHour}
              />                      
              <DropDownPicker
                placeholder='MM'
                defaultValues={['MM', '00', '15', '30', '45']}
                defaultValue={minute}
                onChange={this.onChangeMinute}
              />            
              <ButtonSubmit type='button' onClick={() => this.props.onSubmitForm(hour, minute)}>Add</ButtonSubmit>          
            </Form>
            <ReposHours {...reposDaysProps} />
            <p><small><strong>Tip</strong>: Click above on the selected time to remove.</small></p>
          </Column>
        </Row>
      </Section>
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
                  <CenteredSection>
                    <H2>
                      Schedule newsletter delivery
                    </H2>
                    <p>
                      <FormattedMessage {...messages.startProjectMessage} />
                    </p>
                  </CenteredSection>
                  {page}
                </div>
              </article>
            </Column>
            {!loading ? (
              <Column>
                <Small><a href={API_ENDPOINT + '/track/remove/123'}>Remove my email address from The Newspeller database</a></Small>
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
    onRemoveHour: (hour) => dispatch(removeHour(hour)),
    onAddDay: (day) => dispatch(addDay(day)),
    onRemoveDay: (day) => dispatch(removeDay(day)),
    onChangeTimezone: (evt) => dispatch(updateTimezone(evt.target.value)),
    onChangeGroupBy: (evt) => dispatch(updateGroupBy(evt.target.value)),
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
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
