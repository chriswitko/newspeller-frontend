/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react'
import PropTypes from 'prop-types'

const Img = props => {
  const {className, src, alt} = props

  return (
    <img className={className} src={src} alt={alt} height='100%' />
  )
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Img
