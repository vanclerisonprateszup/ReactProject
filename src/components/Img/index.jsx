import React from 'react'
import { ImgStyled } from './styled'

const Img = (props) => {
  const { file, size, alt } = props
  return (
    <ImgStyled src={file} size={size} alt={alt} />
  )
}

export default Img

