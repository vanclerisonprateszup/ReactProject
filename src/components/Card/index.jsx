import React from 'react'
import LogoZup from '../../utils/img/logoZupShort.png'
import { CardStyled, ContextBody, ImageStyled, Info, Name, CardItem, Delete, Allitems, Check } from './styled'

const Card = () => (
  <CardStyled>
    <CardItem>
      <ImageStyled file={LogoZup} size="55px" radius="25px" />
      <Name>Lorraine</Name>
    </CardItem>
    {/* <ContextBody> */}
    <CardItem><Info>lorraine.beck22@zup.com.br</Info></CardItem>
    <CardItem><Info>(34)9955-3423</Info></CardItem>
    <CardItem><Info>Uberlandia-MG</Info></CardItem>
    {/* </ContextBody> */}
    <CardItem>
      <Delete />
      <Allitems />
      <Check />
    </CardItem>
  </CardStyled>
)

export default Card
