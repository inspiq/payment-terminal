import React, { FC, ReactNode } from 'react'
import Btn from './Btn.styles'

type ComponentProps = {
  children: ReactNode 
  disabled: boolean
  type: string
}

const BtnComponent:FC<ComponentProps> = ({children}) => {
  return (
    <Btn>{children}</Btn>
  )
}

export default BtnComponent