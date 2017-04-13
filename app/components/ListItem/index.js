import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'
import Wrapper from './Wrapper'

const ListItem = (props) => {
  return (
    <Wrapper>
      <Item>
        {props.item}
      </Item>
    </Wrapper>
  )
}

ListItem.propTypes = {
  item: PropTypes.any
}

export default ListItem
