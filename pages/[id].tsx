import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styled from 'styled-components'
import AppWrapper from '../components/AppWrapper'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NumberFormat from 'react-number-format';
import { useHttp } from '../hooks/useHttp';
import Back from './styled/Back'
import Validator from './styled/Validator'
import { useFormik } from 'formik'
import { advSchema } from '../schemas';

const Payment = styled.form`
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

const PaymentTitle = styled.h1`
  font-weight: 800;
  text-align: center;
  font-size: 20px;
  line-height: 36px;
  margin-bottom: 40px;

  > span {
    color: rgb(255, 130, 0);
    text-transform: uppercase;
  }
`

const PaymentBtn = styled.button`
  width: 100%;
  height: 48px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  background: rgb(255, 140, 0);
  border: none;
  border-radius: 24px;
  box-shadow: none;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px;
  transition: .4s;

  &:hover {
    background: rgb(255, 125, 0);
  }

  &:disabled,
  &[disabled] {
    background-color: #a0a0a0;
  }
`

const Block = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.4;
  z-index: 1000;
`

const Interval = styled.div `
  margin: 10px 0px;
`

const PaymentOperator: React.FC = () => {
  const MAX_VAL = 1000;
  const MIN_VAL = 1;
  const [isPaid, setIsPaid] = useState(false);

  const withValueLimit = ({ floatValue }: any) => {
    if (floatValue <= MAX_VAL && floatValue >= MIN_VAL && floatValue !== 0) return true;
    return false;
  };

  const router = useRouter();
  const { request } = useHttp();
  const { id } = router.query

  const onSubmit = async(actions: any) => {
    const data = await request('/api/paymentResult', 'GET', null);
    if (data.isBool) {
      toast.success(data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
      Exit();
    } else {
      toast.error(data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
    }
    actions.resetForm()
  }

  const Exit = () => {
    setIsPaid(true);
    setTimeout(async() => {
      setIsPaid(false);
      await router.push('/');
    }, 3000)
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      phone: "",
      money: ""
    },
    validationSchema: advSchema,
    onSubmit
  });

  return (
    <AppWrapper>
      <Payment onSubmit={handleSubmit}>
        <PaymentTitle>Оплата оператора <span>&quot;{id}&quot;</span></PaymentTitle>
        <NumberFormat 
          value={values.phone} 
          onChange={handleChange}
          onBlur={handleBlur}
          format="+# (###) ###-##-##" 
          mask="_"
          className={errors.phone && touched.phone ? "input-error" : ""}
          placeholder="+7-999-999-99-99" 
          type="tel"
          name="phone"
        ></NumberFormat>
        {errors.phone && touched.phone && <Validator>{errors.phone}</Validator>}
        <Interval></Interval>
        <NumberFormat 
          value={values.money} 
          onChange={handleChange}
          onBlur={handleBlur}
          format="#### ₽" 
          isAllowed={withValueLimit} 
          placeholder="Сумма" 
          name="money"
          className={errors.money && touched.money ? "input-error" : ""}
          type="text"
        ></NumberFormat>
        {errors.money && touched.money && <Validator>{errors.money}</Validator>}
        <PaymentBtn disabled={isSubmitting} type="submit">Оплатить</PaymentBtn>
        <Back><Link href="/">Вернуться назад</Link></Back>
      </Payment>
      <ToastContainer />
      {isPaid ? <Block></Block> : null}
    </AppWrapper>
  )
}

export default PaymentOperator