import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

import { Row, Col } from 'react-grid-system'
import A from 'components/A'
import styled from 'styled-components'
import LocaleToggle from 'containers/LocaleToggle'
import Wrapper from './Wrapper'

import Racoo from 'assets/racoo.png'

const FA = styled(A)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Footer = _ => {
  return (
    <Wrapper>
      <Row>
        <Col lg={8} sm={12}>
          <FA href='#' target='_blank'><FormattedMessage {...messages.contact} /></FA>
          &nbsp;&middot;&nbsp;
          <FA href='mailto:inbox@newspeller.com'><FormattedMessage {...messages.contact} /></FA>
          &nbsp;&middot;&nbsp;
          <FA href='/about'><FormattedMessage {...messages.about} /></FA>
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
        <Col style={{textAlign: 'center', padding: '10px'}}>
          <img src={Racoo} width='50' />
        </Col>
        <Col style={{textAlign: 'center', paddingBottom: '20px'}}>
          <FormattedMessage {...messages.licenseMessage} />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default Footer
