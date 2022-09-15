import React, { FC, ReactNode } from 'react'
import Back from './Back.styles'

type ComponentProps = {
  children: ReactNode
}

const BackComponent:FC<ComponentProps> = ({children}) => {
  return (
    <Back>{children}</Back>
  )
}

export default BackComponent