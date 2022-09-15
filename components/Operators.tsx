import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 250px));
  gap: 20px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(100px, 200px ));
  }
`

const CardItem = styled.div`
  height: 90px;
  background: linear-gradient(rgb(255, 152, 16), rgb(255, 131, 0));
  box-shadow: rgb(255 206 135) 0px 15px 50px -10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: rgb(255, 130, 0);
  }
`

type OperatorItem = {
  title: string;
  id: React.Key;
}
export type OperatorsType = {
  operators: OperatorItem[]
}

const Operators:FC<OperatorsType> = ({ operators }) => {
  if (!operators) {
    return null
  }
  return (
    <Card>
      {operators.map((element) => (
      <Link href={`/${element.title}`} key={element.id}>
        <CardItem>
          {element.title}
        </CardItem>
      </Link>
      ))}
    </Card>
  )
}

export default Operators
