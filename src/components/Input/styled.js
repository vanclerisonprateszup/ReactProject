import styled from 'styled-components'

export const InputStyled = styled.input`
  display: flex;
  justify-content: center;
  height: ${props => props.height ? props.size : '30px'};
  width: ${props => props.width ? props.width : '100%'};
  border-radius: ${props => props.border ? props.border : '15px'};
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 10px 10px;
  border-color: inherit;
  font-weight: 300;
`
