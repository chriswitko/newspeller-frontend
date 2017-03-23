/*
 * IndexPage
 *
 * List all the features
 */
import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import messages from './messages'

import { registerEmail } from '../App/actions'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Input from 'components/Input'
import Label from 'components/Label'
import ButtonSubmit from 'components/ButtonSubmit'
import Div from 'components/Div'
import Small from 'components/Small'

import { Page, Row, Column } from 'hedron'
import Box from 'components/Box'
import Area from 'components/Area'
import styled from 'styled-components'
import { Link } from 'react-router'
import Avatar from 'react-avatar'

import HeroImg from './assets/email_envelope_letter_mail_message_-93-512.png'

const ImgLogo = styled.img`
  @media (max-width: 420px) {
    width: 10em;
    display: inline-block;
    text-align: center;
  }
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Hr = styled.hr`
  border-top: 1px solid #d5d5d5;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  margin: 20px 0;
  padding: 0;
`

const UlLogos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;

  li {
    display: inline-block;
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 3px;

    img {
      border: 1px solid #d5d5d5;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

export class IndexPage extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  numberOfSubscribersLastWeek (d = new Date()) {
    const onejan = new Date(new Date().getFullYear(), 0, 1)
    const millisecsInDay = 86400000
    const start = 2017
    const approx = 67
    return approx * (new Date().getFullYear() - start + 1) * Math.ceil((((new Date() - onejan) / millisecsInDay) + onejan.getDay() + 1) / 7)
  }

  render () {
    const { handleActivate } = this.props

    const promotedChannels = {
      pl: [
        '221077284662',
        '10153006084534583',
        '174708585894934',
        '185265414715',
        '165562920151505',
        '266358044374',
        '248281271873597',
        '358261633959',
        '370535546308040',
        '255100403945',
        '486740884701509',
        '113356018705476',
        '127185519171',
        '26815555478',
        '122203724699',
        '168523630781',
        '103747361639',
        '77049287117',
        '112169522179421',
        '8358247707',
        '176327189064747',
        '18343191100'
      ],
      en: [
        '5550296508',
        '5281959998',
        '155869377766434',
        '193742123995472',
        '527050847445390',
        '223649167822693',
        '147384458624178',
        '120313354720325',
        '10513336322',
        '6250307292',
        '114803848589834',
        '13312631635',
        '9258148868',
        '61261101338',
        '5863113009',
        '14892757589',
        '110032161104',
        '10606591490',
        '117714667328',
        '179618821150',
        '8585811569'
      ]
    }

    const handleChange = (email) => {
      this.setState({email: email.target.value})
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
                <div>
                  <Helmet
                    title='Welcome'
                    meta={[
                      { name: 'description', content: 'Feature page of React.js Boilerplate application' }
                    ]}
                  />
                  <Row>
                    <Column lg={4} style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, textAlign: 'center'}}>
                      <ImgLogo src={HeroImg} width='100%' style={{padding: '20px'}} />
                    </Column>
                    <Column lg={8} style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0}}>
                      <h1 style={{padding: 0, margin: 0, lineHeight: '1.2em'}}>
                        <FormattedMessage {...messages.headline} />
                      </h1>
                      <ol>
                        <li><FormattedMessage {...messages.perks1} /></li>
                        <li><FormattedMessage {...messages.perks2} /></li>
                        <li><FormattedMessage {...messages.perks3} /></li>
                        <li><FormattedMessage {...messages.perks4} /></li>
                      </ol>
                    </Column>
                  </Row>
                  <Row>
                    <Column lg={12} style={{paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0}}>
                      <Div>
                        <Area>
                          <Div>
                            <Label htmlFor='username'>
                              <FormattedMessage {...messages.regFormEnterEmail} />
                              <br />
                              <Small style={{fontWeight: '400'}}><FormattedMessage {...messages.regFormEnterEmailMore} /></Small>
                            </Label>
                            <Input
                              id='email'
                              type='email'
                              placeholder={this.props.intl.formatMessage(messages.inputEmailPlaceholder)}
                              value={this.email}
                              onChange={(email) => handleChange(email)}
                              />
                            <Small><strong>{this.numberOfSubscribersLastWeek()}</strong> <FormattedMessage {...messages.regFormSubsInfo} /></Small>
                          </Div>
                          <Div>
                            <ButtonSubmit type='button' onClick={() => handleActivate(this.state.email)}><FormattedMessage {...messages.regFormBtnSubmit} /></ButtonSubmit>
                          </Div>
                          <Ul>
                            <li>
                              <Small>&#10003; <FormattedMessage {...messages.regFormPromise1} /></Small>
                            </li>
                            <li>
                              <Small>&#10003; <FormattedMessage {...messages.regFormPromise2} /></Small>
                            </li>
                            <li>
                              <Small>&#10003; <FormattedMessage {...messages.regFormPromise3} /></Small>
                            </li>
                            <li>
                              <Small>&#10003; <FormattedMessage {...messages.regFormPromise4} /> <Link to='terms'><FormattedMessage {...messages.linkTerms} /></Link> &amp; <Link to='privacy'><FormattedMessage {...messages.linkPrivacy} /></Link>.</Small>
                            </li>
                          </Ul>
                        </Area>
                      </Div>
                    </Column>
                  </Row>
                  <Hr />
                  <Row>
                    <Column lg={12} style={{paddingTop: 0, paddingBottom: 0}}>
                      <Label>
                        <FormattedMessage {...messages.newsPubIntro} values={{numOrganizations: <strong>78 <FormattedMessage {...messages.wordNewsOrgs} /></strong>, numLangs: <strong>2 <FormattedMessage {...messages.wordLanguages} /></strong>, langs: <FormattedMessage {...messages.listLanguages} />, numCategories: <strong>11 <FormattedMessage {...messages.wordCategories} /></strong>, categories: <FormattedMessage {...messages.listCategories} />}} />
                      </Label>
                      <UlLogos>
                        {promotedChannels[this.props.intl.locale].map(channel => <li key={channel}><Avatar facebookId={channel} size={65} /></li>)}
                      </UlLogos>
                      <p>
                        <FormattedMessage {...messages.newsPubMore} /> <a href='https://goo.gl/forms/xptTS15DCAdfQBIy2' target='_blank'><FormattedMessage {...messages.newsPubRegLink} /> &raquo;</a>
                      </p>
                    </Column>
                  </Row>
                  <Hr />
                  <Row>
                    <Column lg={12} style={{paddingTop: 0}}>
                      <Label>
                        <FormattedMessage {...messages.faqs} />:
                      </Label>
                      <ul>
                        <li>
                          <strong><FormattedMessage {...messages.faqs1q} /></strong>
                          <p><FormattedMessage {...messages.faqs1a} /></p>
                        </li>
                        <li>
                          <strong><FormattedMessage {...messages.faqs2q} /></strong>
                          <p><FormattedMessage {...messages.faqs2a} /></p>
                        </li>
                        <li>
                          <strong><FormattedMessage {...messages.faqs3q} /></strong>
                          <p><FormattedMessage {...messages.faqs3a} values={{linkChris: <a href='https://twitter.com/chris_witko' target='_blank'>Chris Witko</a>, linkWojtek: <a href='mailto:inbox@newspeller.com'>Wojtek Krupa</a>}} /></p>
                        </li>
                        <li>
                          <strong><FormattedMessage {...messages.faqs4q} /></strong>
                          <p><FormattedMessage {...messages.faqs4a} /></p>
                        </li>
                        <li>
                          <strong><FormattedMessage {...messages.faqs5q} /></strong>
                          <p><FormattedMessage {...messages.faqs5a} /></p>
                        </li>
                        <li>
                          <strong><FormattedMessage {...messages.faqs6q} /></strong>
                          <p><FormattedMessage {...messages.faqs6a} values={{numOrganizations: <strong>78 <FormattedMessage {...messages.wordNewsOrgs} /></strong>, numLangs: <strong>2 <FormattedMessage {...messages.wordLanguages} /></strong>, langs: <FormattedMessage {...messages.listLanguages} />, numCategories: <strong>11 <FormattedMessage {...messages.wordCategories} /></strong>, categories: <FormattedMessage {...messages.listCategories} />}} /></p>
                        </li>
                      </ul>
                    </Column>
                  </Row>
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

IndexPage.propTypes = {
  handleActivate: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    handleActivate: (email) => {
      dispatch(registerEmail(email))
    }
  }
}

const mapStateToProps = createStructuredSelector({

})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(IndexPage))
