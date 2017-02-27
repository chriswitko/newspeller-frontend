/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

// console.log('process', process.env)

import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectRepos, makeSelectLoading, makeSelectError, makeSelectNextAt, makeSelectSubscriptions } from 'containers/App/selectors'
import H2 from 'components/H2'
import ReposList from 'components/ReposList'
import CenteredSection from './CenteredSection'
import Section from './Section'
import messages from './messages'
import { loadRepos, removeTopic, addTopic } from '../App/actions'
import { changeUsername } from './actions'
import { makeSelectUsername } from './selectors'
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

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

  render () {
    const { loading, error, repos, onRemove, onAdd, nextAt, subscriptions } = this.props
    const reposListProps = {
      nextAt,
      onRemove,
      onAdd,
      loading,
      error,
      repos,
      subscriptions
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
                  title='My Subscriptions'
                  meta={[
                    { name: 'description', content: 'A React.js Boilerplate application homepage chris' }
                  ]}
                />
                <div>
                  <CenteredSection>
                    <H2>
                      <FormattedMessage {...messages.startProjectHeader} />
                    </H2>
                    <p>
                      <FormattedMessage {...messages.startProjectMessage} />
                    </p>
                  </CenteredSection>
                  <Section>
                    <H2>
                      <FormattedMessage {...messages.trymeHeader} />
                    </H2>
                    <div>Next delivery at: {nextAt} (Europe/London) - <Link to='schedule'>Manage schedule</Link></div>
                    <br />
                    <ReposList {...reposListProps} />
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

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
    React.PropTypes.any
  ]),
  subscriptions: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
    React.PropTypes.any
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
  onRemove: React.PropTypes.func,
  onAdd: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onAdd: (topic) => {
      console.log('add topic', topic)
      // const {item} = topic.props
      dispatch(addTopic(topic))
    },
    onRemove: (topic) => {
      console.log('remove topic', topic)
      // const {item} = topic.props
      dispatch(removeTopic(topic))
    },
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(loadRepos())
    }
  }
}

const mapStateToProps = createStructuredSelector({
  nextAt: makeSelectNextAt(),
  subscriptions: makeSelectSubscriptions(),
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
