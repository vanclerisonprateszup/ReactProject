import styled from 'styled-components'
import Img from '../Img'
import { ReactComponent as DeleteIcon } from '../../utils/img/delete.svg'
import { ReactComponent as AllItems } from '../../utils/img/folderList.svg'
import { ReactComponent as CheckItem } from '../../utils/img/check.svg'
export const CardItem = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

export const CardStyled = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(5, 1fr);
  height: 100px;
  margin-top: 10px;
`

export const ImageStyled = styled(Img)`
  border-radius: 23px !important;
`

export const ContextBody = styled.div`
  display: inline-flex;
  margin-right: 20px;
`

export const Info = styled.p`
  display: flex;
  color: #aaaaaa;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  width: auto;
`

export const Name = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #405061;
  font-weight: bold;
  margin-left: 10px;
`

export const Delete = styled(DeleteIcon)`
  size: 45px;
`

export const Allitems = styled(AllItems)`
`

export const Check = styled(CheckItem)`
`