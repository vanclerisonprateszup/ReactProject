import React from 'react'
import { HeaderStyled, ImgStyled, InputBlock, ImgBlock } from './styled'
import Logo from '../../utils/img/logozup.png'
import User from '../../utils/img/user.svg'
import Input from '../Input'
import Img from '../Img'

const Header = (props) => {
  // const { img } = props
  return (
    < HeaderStyled >
      <ImgBlock>
        <Img file={Logo} alt='' />
      </ImgBlock>
      <InputBlock>
        <Input
          type="text"
          height='30px'
          width="80%"
          placeholder='Buscar'
          onChangeValue={(event) => console.log(event.target)}
        />
      </InputBlock>
      <ImgBlock>
        <Img file
          ={User} alt='' />
      </ImgBlock>
    </HeaderStyled >
  )
}

export default Header
