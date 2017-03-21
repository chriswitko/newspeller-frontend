import React from 'react'

import A from './A'
import { Row, Column } from 'hedron'
import Link from './Link'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import { createStructuredSelector } from 'reselect'
import { makeSelectToken } from 'containers/App/selectors'
import { connect } from 'react-redux'
import Logo from 'components/Logo'
import { logoutUser } from 'containers/App/actions'
import styled from 'styled-components'

const MediaQuery = styled.div`
  @media (max-width: 420px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    const { token, handleLogout } = this.props

    let buttons = (
      <div>
        <Link to='signin'>
          <FormattedMessage {...messages.signin} />
        </Link>
      </div>
    )

    if (token) {
      buttons = (
        <div>
          <Link to='home'>
            <FormattedMessage {...messages.home} />
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='channels'>
            <FormattedMessage {...messages.channels} />
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='settings'>
            <FormattedMessage {...messages.settings} />
          </Link>
          &nbsp;&nbsp;&nbsp;
          <A href='#' onClick={handleLogout}>
            <FormattedMessage {...messages.logout} />
          </A>
        </div>
      )
    }

    return (
      <div style={{width: '100%'}}>
        <Row alignItems='center' style={{backgroundColor: '#3cb371', padding: '0'}}>
          <Column lg={4} sm={4} style={{padding: '10px 20px'}}>
            <MediaQuery>
              <Logo white width='100%' />
            </MediaQuery>
          </Column>
          <Column lg={8} sm={8} style={{textAlign: 'right', padding: '10px 20px'}}>
            <MediaQuery>
              {buttons}
            </MediaQuery>
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
