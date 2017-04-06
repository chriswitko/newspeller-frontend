import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

import { Row, Col } from 'react-grid-system'
import A from 'components/A'
import styled from 'styled-components'
import LocaleToggle from 'containers/LocaleToggle'
import SpaceWrapper from 'components/SpaceWrapper'
import Small from 'components/Small'

import Racoo from 'assets/racoo.png'

const FA = styled(A)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Footer = _ => {
  return (
    <div>
      <Row>
        <Col lg={8} sm={12}>
          <FA href='/about'><FormattedMessage {...messages.about} /></FA>
          &nbsp;&middot;&nbsp;
          <FA href='mailto:inbox@newspeller.com'><FormattedMessage {...messages.contact} /></FA>
          &nbsp;&middot;&nbsp;
          <FA href='/terms'><FormattedMessage {...messages.terms} /></FA>
          &nbsp;&middot;&nbsp;
          <FA href='/privacy'><FormattedMessage {...messages.privacy} /></FA>
          &nbsp;&middot;&nbsp;
          <FA href='https://goo.gl/forms/xptTS15DCAdfQBIy2' target='_blank'><FormattedMessage {...messages.newsPub} /></FA>
          <br />
        </Col>
        <Col lg={4} sm={12}>
          <LocaleToggle />
        </Col>
      </Row>
      <Row>
        <Col>
          <small><FormattedMessage {...messages.licenseMessage} /></small>. <Small>Created & maintained by <a href='https://twitter.com/chris_witko' target='_blank'>Chris Witko</a>. Selected data powered by <a href='https://newsapi.org' target='_blank'>NewsAPI.org</a></Small>
        </Col>
      </Row>
      <Row>
        <Col style={{textAlign: 'center', padding: '10px'}}>
          <div style={{display: 'block', width: '100%', marginBottom: '5px'}}>
            <img src={Racoo} width='50' />
          </div>
          <small>We <span style={{color: 'red'}}>❤️</span> Raccoons</small>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
