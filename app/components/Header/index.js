import React from 'react'
import { FormattedMessage } from 'react-intl'

import A from './A'
import Img from './Img'
import NavBar from './NavBar'
import HeaderLink from './HeaderLink'
import Banner from './_the_white.png'
import messages from './messages'
import { Row, Column } from 'hedron'
import { Link } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { makeSelectToken } from 'containers/App/selectors'
import { connect } from 'react-redux'
import Logo from 'components/Logo'
import { logoutUser } from 'containers/App/actions'

 // <NavBar>
        //   <HeaderLink to='/signin'>
        //     <FormattedMessage {...messages.signin} />
        //   </HeaderLink>
        //   <HeaderLink to='/'>
        //     <FormattedMessage {...messages.home} />
        //   </HeaderLink>
        //   <HeaderLink to='/schedule'>
        //     <FormattedMessage {...messages.scheduling} />
        //   </HeaderLink>
        //   <HeaderLink to='/channels'>
        //     <FormattedMessage {...messages.channels} />
        //   </HeaderLink>
        //   <HeaderLink to='/features'>
        //     <FormattedMessage {...messages.features} />
        //   </HeaderLink>
        // </NavBar>

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    const { token, handleLogout } = this.props

    let buttons = (
      <div>
        <A href='/signin' style={{color: 'white', fontWeight: 'bold'}}>
          Sign in
        </A>
        &nbsp;&nbsp;&nbsp;
        <A href='/features' style={{color: 'white', fontWeight: 'bold'}}>
          How it works
        </A>
        &nbsp;&nbsp;&nbsp;
        <HeaderLink to='/signin'>
          Register
        </HeaderLink>
      </div>
    )

    if (token) {
      buttons = (
        <div>
          <Link to='' style={{color: 'white', fontWeight: 'bold'}}>
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='channels' style={{color: 'white', fontWeight: 'bold'}}>
            Channels
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='schedule' style={{color: 'white', fontWeight: 'bold'}}>
            Settings
          </Link>
          &nbsp;&nbsp;&nbsp;
          <a href='#' onClick={handleLogout} style={{color: 'white', fontWeight: 'bold'}}>
            Log out
          </a>
        </div>
      )
    }

    return (
      <div style={{width: '100%'}}>
        <Row alignItems='center' style={{backgroundColor: '#3cb371'}}>
          <Column lg={6}>
            <Link to=''>
              <Logo white width='200' />
            </Link>
          </Column>
          <Column lg={6} style={{textAlign: 'right'}}>
            {buttons}
          </Column>
        </Row>
      </div>
    )
  }
}

Header.propTypes = {
  handleLogout: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    handleLogout: () => {
      dispatch(logoutUser())
    }
  }
}


const mapStateToProps = createStructuredSelector({
  token: makeSelectToken()
})

// export default Header
export default connect(mapStateToProps, mapDispatchToProps)(Header)

