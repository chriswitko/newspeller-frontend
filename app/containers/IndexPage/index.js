/*
 * IndexPage
 *
 * List all the features
 */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router'

import CookieBanner from 'react-cookie-banner'

import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import { makeSelectLoading, makeSelectError, makeSelectUsername, makeSelectToken } from './selectors'
import { registerEmail, missingFields, changeUsername } from './actions'

import { Row, Col } from 'react-grid-system'
import Input from 'components/Input'
import Label from 'components/Label'
import ButtonSubmit from 'components/ButtonSubmit'
import Div from 'components/Div'
import Small from 'components/Small'
import SpaceWrapper from 'components/SpaceWrapper'
import Alert from 'components/Alert'
import ImgLogo from './components/ImgLogo'
import HeroImg from './assets/email_envelope_letter_mail_message_-93-512.png'

import OurPromise from 'components/OurPromise'
import Faqs from 'components/Faqs'
import PublishersBox from 'components/PublishersBox'

export class IndexPage extends React.PureComponent {
  componentWillReceiveProps (nextProps) {
    if (nextProps.token) {
      window.location.href = `/register?token=${nextProps.token}`
    }
  }

  numberOfSubscribersLastWeek (d = new Date()) {
    const onejan = new Date(new Date().getFullYear(), 0, 1)
    const millisecsInDay = 86400000
    const start = 2017
    const approx = 17
    return approx * (new Date().getFullYear() - start + 1) * Math.ceil((((new Date() - onejan) / millisecsInDay) + onejan.getDay() + 1) / 7)
  }

  render () {
    const { intl, error, loading, onSubmitForm, onChangeUsername, username } = this.props

    return (
      <div>
        <Helmet
          title='Welcome'
          meta={[
            { name: 'description', content: 'Newspeller.com' },
            {'name': 'description', 'content': 'Subscribe to your favourite magazines and newspapers directly to your inbox.'},
            {'property': 'og:type', 'content': 'website'}
          ]}
          link={[
            {'rel': 'canonical', 'href': 'https://newspeller.com'}
          ]}
        />
        <CookieBanner
          message={intl.formatMessage(messages.cookies)}
          onAccept={() => {}}
          cookie='user-has-accepted-cookies' />
        <div>
          <Row>
            <Col sm={12}>
              <div>
                <SpaceWrapper shadow bg='linear-gradient(135deg, #b93fe5, #549eff)' color='white'>
                  <Row>
                    <Col lg={4} xs={12} style={{textAlign: 'center'}}>
                      <ImgLogo src={HeroImg} width='100%' style={{padding: '20px'}} />
                    </Col>
                    <Col lg={8} xs={12}>
                      <h1 style={{padding: 0, margin: 0, lineHeight: '1.2em'}}>
                        <FormattedMessage {...messages.headline} />
                      </h1>
                      <p><FormattedMessage {...messages.subline} /></p>
                      <ol>
                        <li><FormattedMessage {...messages.perks1} /></li>
                        <li><FormattedMessage {...messages.perks2} /></li>
                        <li><FormattedMessage {...messages.perks3} /></li>
                        <li><FormattedMessage {...messages.perks4} /></li>
                      </ol>
                      <form id='form' onSubmit={onSubmitForm}>
                        <Div>
                          <Label htmlFor='username'>
                            <FormattedMessage {...messages.regFormEnterEmail} />
                          </Label>
                          { error ? <Div><Alert>{ intl.formatMessage(messages[error]) }</Alert></Div> : '' }
                          <Input
                            id='username'
                            type='username'
                            placeholder={intl.formatMessage(messages.inputEmailPlaceholder)}
                            value={username}
                            onChange={onChangeUsername}
                            />
                          <Small><strong>{this.numberOfSubscribersLastWeek()}</strong> <FormattedMessage {...messages.regFormSubsInfo} /></Small>
                        </Div>
                        <Div>
                          <ButtonSubmit lg color='white' textColor='#4745d1' disabled={loading} type='submit'><FormattedMessage {...loading ? messages.btnPleaseWait : messages.regFormBtnSubmit} /></ButtonSubmit>
                        </Div>
                        <Div><Small><FormattedMessage {...messages.regFormPromise4} /> <Link to='terms'><FormattedMessage {...messages.linkTerms} /></Link> &amp; <Link to='privacy'><FormattedMessage {...messages.linkPrivacy} /></Link>.</Small></Div>
                      </form>
                    </Col>
                  </Row>
                </SpaceWrapper>
                <PublishersBox {...intl} />
                <OurPromise {...intl} />
                <Faqs {...intl} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  handleActivate: PropTypes.func
}

const validateEmail = (email) => {
  if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    return true
  }
  return false
}

export const mapDispatchToProps = dispatch => {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      if (evt) {
        if (evt.target.username.value && validateEmail(evt.target.username.value)) {
          dispatch(registerEmail(evt.target.username.value))
        } else {
          dispatch(missingFields())
        }
      }
    }
  }
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(IndexPage))
