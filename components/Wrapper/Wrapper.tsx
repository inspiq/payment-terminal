import React, { FC, ReactNode } from 'react'
import Wrapper from './Wrapper.styles'

type ComponentProps = {
  children: ReactNode
}

const WrapperComponent:FC<ComponentProps> = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default WrapperComponent
