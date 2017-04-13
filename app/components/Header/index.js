import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectToken } from 'containers/App/selectors'
import { logoutUser } from 'containers/App/actions'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

import { Row, Col, ScreenClassRender } from 'react-grid-system'
import A from './A'
import Link from './Link'
import Logo from 'components/Logo'
import ButtonLink from 'components/ButtonLink'
import Icon from 'assets/n_logo_r.png'

const styleActions = (screenClass) => {
  if (screenClass === 'xl') return { textAlign: 'right' }
  if (screenClass === 'lg') return { textAlign: 'right' }
  if (screenClass === 'md') return { textAlign: 'right' }
  if (screenClass === 'sm') return { textAlign: 'center', paddingTop: '20px' }
  if (screenClass === 'xs') return { textAlign: 'center', paddingTop: '20px' }
  return { textAlign: 'right' }
}

const styleLogo = (screenClass) => {
  if (screenClass === 'xl') return { textAlign: 'left' }
  if (screenClass === 'lg') return { textAlign: 'left' }
  if (screenClass === 'md') return { textAlign: 'left' }
  if (screenClass === 'sm') return { textAlign: 'center', paddingBottom: '10px' }
  if (screenClass === 'xs') return { textAlign: 'center', paddingBottom: '10px' }
  return { textAlign: 'left' }
}

const buttons = (props) => {
  return props.token ? (
    <div>
      <Link to='home'>
        <FormattedMessage {...messages.home} />
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link to='settings'>
        <FormattedMessage {...messages.settings} />
      </Link>
      &nbsp;&nbsp;&nbsp;
      <A href='#' onClick={props.handleLogout}>
        <FormattedMessage {...messages.logout} />
      </A>
    </div>
    ) : (
      <div>
        <ButtonLink to='signin'>
          <FormattedMessage {...messages.signin} />
        </ButtonLink>
      </div>
  )
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col lg={5} sm={12}>
            <ScreenClassRender style={styleLogo}>
              <div style={{display: 'block', width: '100%'}}>
                <div style={{float: 'left', marginRight: '15px'}}>
                  <img src={Icon} height='50' />
                </div>
                <Logo black style={{float: 'left'}} />
              </div>
            </ScreenClassRender>
          </Col>
          <Col lg={7} sm={12}>
            <ScreenClassRender style={styleActions}>
              {buttons(this.props)}
            </ScreenClassRender>
          </Col>
        </Row>
      </div>
    )
  }
}

Header.propTypes = {
  handleLogout: PropTypes.func
}

export const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(logoutUser())
    }
  }
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken()
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
