import React from 'react'
import { FormattedMessage } from 'react-intl'

import A from './A'
import Img from './Img'
import NavBar from './NavBar'
import HeaderLink from './HeaderLink'
import Banner from './_the.png'
import messages from './messages'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <A href='http://localhost:3000'>
          <Img src={Banner} alt='react-boilerplate - Logo' />
        </A>
        <NavBar>
          <HeaderLink to='/'>
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to='/schedule'>
            <FormattedMessage {...messages.scheduling} />
          </HeaderLink>
          <HeaderLink to='/channels'>
            <FormattedMessage {...messages.channels} />
          </HeaderLink>
          <HeaderLink to='/features'>
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    )
  }
}

export default Header
