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

import { makeSelectLoading, makeSelectError, makeSelectConfirmedAt, makeSelectResent, makeSelectFeeds } from './selectors'
import { loadUserData, loadFeeds, addTopic, removeTopic, resendActivationEmail } from './actions'

import { Row, Col } from 'react-grid-system'
import H2 from 'components/H2'
import Div from 'components/Div'
import Section from 'components/Section'
import SpaceWrapper from 'components/SpaceWrapper'
import Label from 'components/Label'
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
    const { loading, channels, onRemove, onAdd, language, intl } = this.props

    const listProps = {
      onRemove,
      onAdd,
      intl
    }

    let byLanguage = {
      'en': {
        name: 'English',
        total: 0,
        channels: [],
        sections: [],
        order: 0
      },
      'pl': {
        name: 'Polish',
        total: 0,
        channels: [],
        sections: [],
        order: 0
      },
      'de': {
        name: 'Gernam',
        total: 0,
        channels: [],
        sections: [],
        order: 0
      },
      'fr': {
        name: 'French',
        total: 0,
        channels: [],
        sections: [],
        order: 0
      },
      'es': {
        name: 'Spanish',
        total: 0,
        channels: [],
        sections: [],
        order: 0
      }
    }

    const langsByOrder = _ => {
      const languages = ['en', 'pl', 'es', 'fr', 'de']
      return Array.from(new Set([language, ...languages]))
    }

    if (channels) {
      channels.map(c => byLanguage[c.language.toLowerCase()].channels.push(c))
    }

    let byChannel = {}

    if (byLanguage) {
      Object.keys(byLanguage).map(l => {
        byLanguage[l].channels.map(c => {
          if (!byChannel.hasOwnProperty(c.channelCode)) {
            byChannel[c.channelCode] = {
              channel: c,
              sections: []
            }
          }
          byLanguage[l].total++
          byChannel[c.channelCode].sections.push(c)
        })
        byLanguage[l].sections = byChannel
        byChannel = {}
      })
    }

    return (
      <div>
        <Row>
          <Col>
            <article>
              <Helmet
                title='Channels'
              />
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
                  {loading ? <SpaceWrapper><FormattedMessage {...messages.loading} /></SpaceWrapper> : (
                    <div>
                      {langsByOrder().map(l => {
                        if (byLanguage[l].total) {
                          return (
                            <div key={l} style={{marginBottom: '15px'}}>
                              <SpaceWrapper bg='black' color='white' header>
                                <Label>
                                  {byLanguage[l].name}
                                </Label>
                              </SpaceWrapper>
                              <ChannelItem sections={byLanguage[l].sections} {...listProps} />
                            </div>
                          )
                        }
                      })}
                      <SpaceWrapper>
                        <strong><FormattedMessage {...messages.cantsee} /></strong>
                      </SpaceWrapper>
                    </div>
                  )}
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
    }
  }
}

const mapStateToProps = createStructuredSelector({
  resent: makeSelectResent(),
  language: makeSelectLocale(),
  channels: makeSelectFeeds(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  confirmedAt: makeSelectConfirmedAt()
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ChannelsPage))
