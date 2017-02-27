/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectDays, makeSelectHours, makeSelectLoading, makeSelectError } from 'containers/App/selectors'
import H2 from 'components/H2'
import ReposDays from 'components/ReposDays'
import ReposHours from 'components/ReposHours'
import AtPrefix from './AtPrefix'
import CenteredSection from './CenteredSection'
import Section from './Section'
import Form from './Form'
import Input from './Input'
import messages from './messages'
import { loadRepos, addNewHour, removeDay, addDay, removeHour } from '../App/actions'
import { changeTime } from './actions'
import { makeSelectUsername } from './selectors'
import styled from 'styled-components'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page, Row, Column } from 'hedron'

const Box = styled.div`
  max-width: 100%;
  background: white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  display: flex;
  flex: 1;
  min-height: 100vh;
`

export class SchedulePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    // if (this.props.time && this.props.time.trim().length > 0) {
    this.props.onLoad()
    // }
  }

  render () {
    const { loading, error, days, hours, onRemoveDay, onAddDay, onRemoveHour } = this.props
    const reposDaysProps = {
      onRemoveHour,
      onAddDay,
      onRemoveDay,
      loading,
      error,
      days,
      hours
    }

    return (
      <Box>
        <Page style={{display: 'flex', flexDirection: 'column'}}>
          <Row>
            <Header />
          </Row>
          <Row style={{flex: 1}}>
            <Column>
              <article>
                <Helmet
                  title='Schedule'
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
                    <Form onSubmit={this.props.onSubmitForm}>
                      <label htmlFor='time'>
                        <AtPrefix>
                          Enter new time
                        </AtPrefix>
                        &nbsp;
                        <Input
                          id='time'
                          type='text'
                          placeholder='Enter new time HH:MM'
                          value={this.props.time}
                          onChange={this.props.onChangeTime}
                        />
                      </label>
                    </Form>
                  </CenteredSection>
                  <Section>
                    <H2>
                      Days
                    </H2>
                    <ReposDays {...reposDaysProps} />
                    <H2>
                      Hours
                    </H2>
                    <ReposHours {...reposDaysProps} />
                  </Section>
                </div>
              </article>
            </Column>
          </Row>
          <Row alignSelf='flex-start' style={{width: '100%'}}>
            <Footer />
          </Row>
        </Page>
      </Box>          
    )
  }
}

SchedulePage.propTypes = {
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

export function mapDispatchToProps (dispatch) {
  return {
    onRemoveHour: (hour) => dispatch(removeHour(hour)),
    onAddDay: (day) => dispatch(addDay(day)),
    onRemoveDay: (day) => dispatch(removeDay(day)),
    onChangeTime: (evt) => dispatch(changeTime(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(addNewHour(evt.target.time.value))
    },
    onLoad: () => {
      dispatch(loadRepos())
    }
  }
}

const mapStateToProps = createStructuredSelector({
  days: makeSelectDays(),
  hours: makeSelectHours(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage)
