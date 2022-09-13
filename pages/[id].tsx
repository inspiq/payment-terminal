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
import Btn from './styled/Btn'
import Validator from './styled/Validator'
import { useFormik } from 'formik'
import { advSchema } from '../schemas';
import Title from './styled/Title';
import Form from './styled/Form';

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
      <Form onSubmit={handleSubmit}>
        <Title>Оплата оператора <span>&quot;{id}&quot;</span></Title>
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
        <Btn disabled={isSubmitting} type="submit">Оплатить</Btn>
        <Back><Link href="/">Вернуться назад</Link></Back>
      </Form>
      <ToastContainer />
      {isPaid ? <Block></Block> : null}
    </AppWrapper>
  )
}

export default PaymentOperator