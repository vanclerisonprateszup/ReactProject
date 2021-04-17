import React from 'react'
import LogoZup from '../../utils/img/logoZupShort.png'
import { CardStyled, ImageStyled, Info, Name, CardItem, Delete, Allitems, Check } from './styled'

const Card = (props) => {
  const { name, email, tel, city, estate } = props
  return (
    < CardStyled >
      <CardItem>
        <ImageStyled file={LogoZup} size="55px" radius="25px" />
        <Name>{name}</Name>
      </CardItem>
      {/* <ContextBody> */}
      <CardItem><Info>{email}</Info></CardItem>
      <CardItem><Info>{tel}</Info></CardItem>
      <CardItem><Info>{city}-{estate}</Info></CardItem>
      {/* </ContextBody> */}
      <CardItem>
        <Delete />
        <Allitems />
        <Check />
      </CardItem>
    </CardStyled >
  )
}

export default Card
