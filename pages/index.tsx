import React from 'react'
import AppWrapper from '../components/AppWrapper'
import styled from 'styled-components'
import Operators from '../components/Operators'
import Link from 'next/link'
import {InferGetStaticPropsType} from 'next'

const TitlePay = styled.h1`
  color: #000;
  font-size: 20px;
  max-width: 500px;
  width: 100%;
  
  > span {
    color: rgb(255, 130, 0);
  }
`

const AddOperator = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.14);
  background: padding-box padding-box rgb(255, 255, 255);
  border-radius: 10px;
  padding: 20px 25px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: .3s;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.28);
  }
  @media (max-width: 500px) {
    margin-top: 25px;
    width: 100%;
  }
`

const CardInfo = styled.div`
  max-width: 790px;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 2px 0px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_HOST}/operators`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      operators: data
    },
  }
}

const Home = ({ operators }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <AppWrapper>
      <CardInfo>
        <TitlePay>Добавьте и <span>оплатите</span> абсолютно любого оператора сотовой связи!</TitlePay>
        <Link href="/CreateOperator">
          <AddOperator>Добавить оператора</AddOperator>
        </Link>
      </CardInfo>
      <Operators operators={operators}></Operators>
    </AppWrapper>
  )
}

export default Home