import React from 'react'
import { InputStyled } from './styled'

const Input = (props) => {
  const { height, type, width, placeholder, onChangeValue } = props
  const handleChange = (event) => {
    onChangeValue(event.target.value)
  }

  return (
    <InputStyled size={height} type={type} width={width} placeholder={placeholder} onChange={handleChange} />
  )
}

export default Input

