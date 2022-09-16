import Link from 'next/link'
import React from 'react'
import Back from './Back.styles'

const BackComponent: React.FC = () => {
  return (
    <Back><Link href="/">Вернуться назад</Link></Back>
  )
}

export default BackComponent