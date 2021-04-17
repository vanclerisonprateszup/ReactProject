import React from 'react'

const List = (props) => {
  const { listItems } = props
  return (
    <ul>
      <li>
        {listItems}
      </li>
    </ul>
  )
}

export default List
