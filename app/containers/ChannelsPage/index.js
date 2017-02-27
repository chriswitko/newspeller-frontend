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

import { makeSelectRepos, makeSelectFeeds, makeSelectLoading, makeSelectError } from 'containers/App/selectors'
import H2 from 'components/H2'
import ChannelsList from 'components/ChannelsList'
import CenteredSection from './CenteredSection'
import Section from './Section'
import messages from './messages'
import { loadRepos, loadFeeds, addTopic, removeTopic } from '../App/actions'
import styled from 'styled-components'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page, Row, Column } from 'hedron'
import { Link } from 'react-router'

const Box = styled.div`
  max-width: 100%;
  background: white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  display: flex;
  flex: 1;
  min-height: 100vh;

  a {
    color: rgb(0, 102, 204)
  }

  a:hover, a:visited {
    color: #06c
  }  
`

export class ChannelsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    this.props.onReady()
    // if (!this.props.repos.length) {
    //   this.props.onLoad()
    // }
    // if (this.props.repos.length && !this.props.channels.length) {
    //   this.props.onSubmitForm()
    // }
  }

  render () {
    const { loading, error, channels, repos, onRemove, onAdd } = this.props
    const reposListProps = {
      onRemove,
      onAdd,
      loading,
      error,
      channels,
      repos
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
                  title='Channels'
                  meta={[
                    { name: 'description', content: 'A React.js Boilerplate application homepage chris' }
                  ]}
                />
                <div>
                  <CenteredSection>
                    <H2>
                      Channels
                    </H2>
                    <p>
                      <FormattedMessage {...messages.startProjectMessage} />
                    </p>
                  </CenteredSection>
                  <Section>
                    <H2>
                      All Channels
                    </H2>
                    <ChannelsList {...reposListProps} />
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
    onAdd: (topic) => {
      dispatch(addTopic(topic))
    },
    onRemove: (topic) => {
      dispatch(removeTopic(topic))
    },
    onSubmitForm: (evt) => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(loadFeeds())
    },
    onLoad: () => {
      dispatch(loadRepos())
    },
    onReady: () => {
      dispatch(loadFeeds())
      dispatch(loadRepos())
      // dispatch(loadRepos, loadFeeds)
      // return bindActionCreators(Object.assign({}, loadFeeds, loadRepos), dispatch)
    }
  }
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  channels: makeSelectFeeds(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ChannelsPage)
