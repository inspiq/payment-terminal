import React, { FC, ReactNode } from 'react'
import Validator from './Validator.styles'

type ComponentProps = {
  children: ReactNode
}

const ValidatorComponent:FC<ComponentProps> = ({children}) => {
  return (
    <Validator>{children}</Validator>
  )
}

export default ValidatorComponent