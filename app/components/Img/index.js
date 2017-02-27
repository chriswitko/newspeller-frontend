/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React, { PropTypes } from 'react'

function Img (props) {
  const {className, src, alt, width = 150} = props

  return (
    <img className={className} src={src} alt={alt} width={width} />
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
