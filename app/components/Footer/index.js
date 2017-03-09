import React from 'react'
import { FormattedMessage } from 'react-intl'

import A from 'components/A'
import styled from 'styled-components'
import LocaleToggle from 'containers/LocaleToggle'
import Wrapper from './Wrapper'
import messages from './messages'

const FA = styled(A)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function Footer () {
  return (
    <Wrapper>
      <section>
        <div>
          <FA href='#' target='_blank'>Blog</FA>
          &nbsp;&middot;&nbsp;
          <FA href='#' target='_blank'>Help</FA>
          &nbsp;&middot;&nbsp;
          <FA href='/about'>About Newspeller</FA>
          &nbsp;&middot;&nbsp;
          <FA href='/terms'>Terms of Use</FA>
          &nbsp;&middot;&nbsp;
          <FA href='/privacy'>Privacy Policy</FA>
          &nbsp;&middot;&nbsp;
          <FA href='/news-publishers'>News Publishers</FA>
        </div>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
    </Wrapper>
  )
}

export default Footer
