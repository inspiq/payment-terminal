import React, { FC, ReactNode } from 'react'
import AppWrapper from '../components/Wrapper/Wrapper'
import Link from 'next/link'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHttp } from '../hooks/useHttp';
import Back from '../components/Back/Back'
import Title from '../components/Title/Title'
import Btn from '../components/Button/Btn'
import Validator from '../components/Validator/Validator'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas';

const Form = styled.form`
  max-width: 310px;
  width: 100%;
  background: #fff;
  box-shadow: rgb(0 0 0 / 16%) 0px 20px 64px 8px;
  border-radius: 10px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Input = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 5px;
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(0,0,0,0.2);
  transition: .4s;
  font-size: 16px;
  font-weight: 400;
  &:active,
  &:focus {
    border-bottom: 2px solid rgb(255, 130, 0);
  }
  &::placeholder {
   color: #a0a0a0;
   font-size: 14px;
  }
`

const CreateOperator: React.FC = () => {
  const { request } = useHttp();

  const onSubmit = async(values: any, actions: any) => {
    const data = await request('/api/addOperator', 'POST', values);
    toast.success("Оператор успешно добавлен!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
    actions.resetForm()
  }

  const { values, errors, dirty, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: basicSchema,
    onSubmit
  });

  return (
    <AppWrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Введите <span>любимого</span> оператора</Title>
        <Input 
          value={values.title} 
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="МТС, Билайн, Мегафон.." 
          type="text"
          name="title"
          className={errors.title && touched.title ? "input-error" : ""}
        ></Input>
        {errors.title && touched.title && <Validator>{errors.title}</Validator>}
        <Btn disabled={isSubmitting || !dirty} type="submit">Продолжить</Btn>
        <Back><Link href="/">Вернуться назад</Link></Back>
      </Form>
      <ToastContainer />
    </AppWrapper>
  )
}

export default CreateOperator