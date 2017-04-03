import React from 'react'

import Wrapper from './Wrapper'
import Img from 'components/Img'
import BlackLogo from './_the.png'
import WhiteLogo from './_the_white.png'

function Logo (props) {
  const { white } = props
  return (
    <Wrapper {...props}>
      <a href='/'>
        <Img src={white ? WhiteLogo : BlackLogo} alt='The Newspeller' />
      </a>
    </Wrapper>
  )
}

// Logo.propTypes = {
//   src: React.PropTypes.func.isRequired,
// }

export default Logo
