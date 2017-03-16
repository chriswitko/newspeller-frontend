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

import { makeSelectRepos, makeSelectFeeds, makeSelectLoading, makeSelectError, makeSelectLocale } from 'containers/App/selectors'
import H2 from 'components/H2'
import Box from 'components/Box'
import Div from 'components/Div'
import ChannelsList from 'components/ChannelsList'
import Section from './Section'
import messages from './messages'
import { loadRepos, loadFeeds, addTopic, removeTopic } from '../App/actions'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page, Row, Column } from 'hedron'
import DropDownObjectPicker from 'components/DropDownObjectPicker'
import Label from 'components/Label'

export class ChannelsPage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    const { language } = this.props
    this.props.onReady({
      language
    })
  }

  render () {
    const { loading, error, channels, repos, onRemove, onAdd, onChangeLanguage, language } = this.props
    const reposListProps = {
      onRemove,
      onAdd,
      loading,
      error,
      channels,
      repos
    }

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
                  title='Channels'
                  meta={[
                    { name: 'description', content: 'A React.js Boilerplate application homepage chris' }
                  ]}
                />
                <div>
                  <Section>
                    <Div>
                      <H2>
                        Channels
                      </H2>
                      <div>
                        <FormattedMessage {...messages.startProjectMessage} />
                      </div>
                    </Div>
                    <br />
                    <Div>
                      <Label>Filter by language</Label>
                      <DropDownObjectPicker
                        placeholder='Filter by language'
                        defaultValues={[{name: 'Select language (All)', value: 'all'}, {name: 'English', value: 'en'}, {name: 'Deutsch', value: 'de'}, {name: 'Polski', value: 'pl'}]}
                        defaultValue={language}
                        onChange={onChangeLanguage}
                      />
                    </Div>
                    <Div>
                      <ChannelsList {...reposListProps} />
                    </Div>
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

ChannelsPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  channels: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
    React.PropTypes.any
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
  onAdd: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onChangeLanguage: (e) => {
      dispatch(loadFeeds({
        language: e.target.value
      }))
    },
    onAdd: (topic) => {
      dispatch(addTopic(topic))
    },
    onRemove: (topic) => {
      dispatch(removeTopic(topic))
    },
    onSubmitForm: (e) => {
      dispatch(loadFeeds({
        language: e.target.value
      }))
    },
    onLoad: () => {
      dispatch(loadRepos())
    },
    onReady: (args) => {
      dispatch(loadFeeds(args))
      dispatch(loadRepos())
    }
  }
}

const mapStateToProps = createStructuredSelector({
  language: makeSelectLocale(),
  repos: makeSelectRepos(),
  channels: makeSelectFeeds(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ChannelsPage)
