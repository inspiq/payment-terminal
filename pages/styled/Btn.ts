import styled from 'styled-components'

const Btn = styled.button`
  width: 100%;
  height: 48px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  background: rgb(255, 140, 0);
  border: none;
  border-radius: 24px;
  box-shadow: none;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px;
  transition: .4s;
  &:hover {
    background: rgb(255, 125, 0);
  }
  &:disabled,
  &[disabled] {
    background-color: #a0a0a0;
  }
`

export default Btn;