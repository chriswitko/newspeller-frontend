/*
 * ChannelsPage
 *
 */

import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import { makeSelectLocale } from 'containers/App/selectors'

import { makeSelectLoading, makeSelectError, makeSelectConfirmedAt, makeSelectResent, makeSelectFeeds, makeSelectCategory, makeSelectChannels } from './selectors'
import { loadUserData, loadFeeds, addTopic, removeTopic, resendActivationEmail, filterChannels } from './actions'

import { Row, Col } from 'react-grid-system'
import H2 from 'components/H2'
import Div from 'components/Div'
import Section from 'components/Section'
import SpaceWrapper from 'components/SpaceWrapper'
import ChannelItem from 'components/ChannelItem'
import ButtonSubmit from 'components/ButtonSubmit'

export class ChannelsPage extends React.PureComponent {
  componentDidMount () {
    const { language } = this.props
    this.props.onReady({
      language
    })

    this.showConfirmationAlert = this.showConfirmationAlert.bind(this)
  }

  showConfirmationAlert = _ => {
    const { loading, onResend, confirmedAt, resent } = this.props

    if (!loading && !confirmedAt && !resent) {
      return (
        <SpaceWrapper bg='#ff294c' color='white'>
          <Div>
            <FormattedMessage {...messages.resendMessage} />
          </Div>
          <ButtonSubmit type='button' color='white' onClick={onResend}><FormattedMessage {...messages.btnResend} /></ButtonSubmit>
        </SpaceWrapper>
      )
    }
  }

  render () {
    const { loading, onRemove, onAdd, onFilterChannels, selectedCategory, selectedChannels, intl } = this.props

    const listProps = {
      onRemove,
      onAdd,
      intl
    }

    let categories = [
      {name: 'News', code: 'news', totalSubscribed: 0},
      {name: 'Sport', code: 'sport', totalSubscribed: 0},
      {name: 'Science & Technology', code: 'science_technology', totalSubscribed: 0},
      {name: 'Politics', code: 'politics', totalSubscribed: 0},
      {name: 'Business', code: 'business', totalSubscribed: 0},
      {name: 'Art & Entertainment', code: 'art_entertainment', totalSubscribed: 0},
      {name: 'Travel', code: 'travel', totalSubscribed: 0},
      {name: 'Food', code: 'food', totalSubscribed: 0},
      {name: 'Moto', code: 'moto', totalSubscribed: 0},
      {name: 'Movies', code: 'movies', totalSubscribed: 0},
      {name: 'Fashion & Design', code: 'fashion_design', totalSubscribed: 0},
      {name: 'Health & Living', code: 'health_living', totalSubscribed: 0}
    ]

    return (
      <div>
        <Helmet
          title='Channels'
        />
        <Row>
          <Col>
            <article>
              <div>
                <Section>
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
                  {this.showConfirmationAlert()}
                  <div>
                    <Row>
                      <Col lg={4} xs={12}>
                        <Div>
                          <SpaceWrapper bg='black' color='white' header>
                            <FormattedMessage {...messages.categories} />
                          </SpaceWrapper>
                          {categories.map(c => (
                            <SpaceWrapper header dynamic active={selectedCategory === c.code} key={c.code} onClick={() => onFilterChannels(c.code)}>
                              {intl.formatMessage(messages['category_' + c.code])}
                              <span className='arrow'>&rarr;</span>
                            </SpaceWrapper>
                          ))}
                        </Div>
                      </Col>
                      <Col lg={8} xs={12}>
                        {loading ? <SpaceWrapper><FormattedMessage {...messages.loading} /></SpaceWrapper> : (
                          <div>
                            <SpaceWrapper bg='black' color='white' header>
                              <FormattedMessage {...messages.header} />
                            </SpaceWrapper>
                            <ChannelItem sections={selectedChannels} {...listProps} />
                            <SpaceWrapper>
                              <FormattedMessage {...messages.cantsee} />
                            </SpaceWrapper>
                          </div>
                        )}
                      </Col>
                    </Row>
                  </div>
                </Section>
              </div>
            </article>
          </Col>
        </Row>
      </div>
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

export const mapDispatchToProps = dispatch => {
  return {
    onResend: (data) => {
      dispatch(resendActivationEmail())
    },
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
      dispatch(loadUserData())
    },
    onReady: (args) => {
      dispatch(loadFeeds(args))
    },
    onFilterChannels: (code) => dispatch(filterChannels(code))
  }
}

const mapStateToProps = createStructuredSelector({
  selectedChannels: makeSelectChannels(),
  selectedCategory: makeSelectCategory(),
  resent: makeSelectResent(),
  language: makeSelectLocale(),
  channels: makeSelectFeeds(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  confirmedAt: makeSelectConfirmedAt()
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ChannelsPage))
