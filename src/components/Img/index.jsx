import React from 'react'
import { ImgStyled } from './styled'

const Img = (props) => {
  const { file, size, alt, radius } = props
  return (
    <ImgStyled src={file} size={size} alt={alt} radius={radius} />
  )
}

export default Img

