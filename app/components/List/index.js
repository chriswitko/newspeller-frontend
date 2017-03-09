import React from 'react'

import Ul from './Ul'
import Wrapper from './Wrapper'

function List (props) {
  const ComponentToRender = props.component
  let content = (<div />)

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => {
      return <ComponentToRender key={`item-${index}`} item={item} onRemove={props.onRemove} onAdd={props.onAdd} />
    })
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />)
  }

  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  )
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.any,
  onRemove: React.PropTypes.func,
  onAdd: React.PropTypes.func
}

export default List
