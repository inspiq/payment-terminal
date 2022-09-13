import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 5px;
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(0,0,0,0.2);
  transition: .4s;
  font-size: 16px;
  font-weight: 400;
  &:active,
  &:focus {
    border-bottom: 2px solid rgb(255, 130, 0);
  }
  &::placeholder {
   color: #a0a0a0;
   font-size: 14px;
  }
`

export default Input;