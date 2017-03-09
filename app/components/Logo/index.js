import React from 'react'

import Wrapper from './Wrapper'
import Img from 'components/Img'
import BlackLogo from './_the.png'
import WhiteLogo from './_the_white.png'
import { Link } from 'react-router'

function Logo (props) {
  const { white, width } = props
  return (
    <Wrapper {...props}>
      <Link to='/'>
        <Img src={white ? WhiteLogo : BlackLogo} alt='The Newspeller' width={width} />
      </Link>
    </Wrapper>
  )
}

// Logo.propTypes = {
//   src: React.PropTypes.func.isRequired,
// }

export default Logo
