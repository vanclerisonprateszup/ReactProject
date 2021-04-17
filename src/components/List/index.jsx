import React from 'react'
import Card from '../Card'

const List = (props) => {
  const { listResponse } = props
  return (
    <li>
      <ul>{listResponse.map((member) => (
        <Card
          id={member.id}
          email={member.email}
          name={member.name}
          tel={member.tel}
          city={member.city}
          estate={member.state}
        />
      ))}
      </ul>
    </li>
  )
}

export default List
