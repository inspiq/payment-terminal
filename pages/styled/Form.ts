import styled from 'styled-components'

const Form = styled.form`
  max-width: 310px;
  width: 100%;
  background: #fff;
  box-shadow: rgb(0 0 0 / 16%) 0px 20px 64px 8px;
  border-radius: 10px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > input {
    width: 100%;
    height: 35px;
    padding-left: 5px;
    outline: none;
    border: none;
    border-bottom: 2px solid rgba(0,0,0,0.2);
    font-size: 16px;
    font-weight: 400;
    transition: .3s;
  
    &:active,
    &:focus {
      border-bottom: 2px solid rgb(255, 130, 0);
    }
  
    &::placeholder {
      color: #a0a0a0;
    }
  }
`

export default Form;