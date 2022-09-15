import React, { FC, ReactNode } from 'react'
import Title from './Title.styles'

type ComponentProps = {
  children: ReactNode
}

const TitleComponent:FC<ComponentProps> = ({children}) => {
  return (
    <Title>{children}</Title>
  )
}

export default TitleComponent