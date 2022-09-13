import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper: any = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`

type wrapperProps = {
  children: ReactNode
}

const AppWrapper:FC<wrapperProps> = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default AppWrapper
