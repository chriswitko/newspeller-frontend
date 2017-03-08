import React from 'react'

import A from './A'
import HeaderLink from './HeaderLink'
import { Row, Column } from 'hedron'
import Link from './Link'
import { createStructuredSelector } from 'reselect'
import { makeSelectToken } from 'containers/App/selectors'
import { connect } from 'react-redux'
import Logo from 'components/Logo'
import { logoutUser } from 'containers/App/actions'

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
          <Link to=''>
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='channels'>
            Channels
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='schedule'>
            Settings
          </Link>
          &nbsp;&nbsp;&nbsp;
          <A href='#' onClick={handleLogout}>
            Log out
          </A>
        </div>
      )
    }

    return (
      <div style={{width: '100%'}}>
        <Row alignItems='center' style={{backgroundColor: '#3cb371', padding: '0'}}>
          <Column lg={6} style={{padding: '10px 20px'}}>
            <Link to=''>
              <Logo white width='200' />
            </Link>
          </Column>
          <Column lg={6} style={{textAlign: 'right', padding: '10px 20px'}}>
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
