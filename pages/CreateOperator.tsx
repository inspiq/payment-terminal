import React from 'react'
import styled from 'styled-components'
import AppWrapper from '../components/AppWrapper'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHttp } from '../hooks/useHttp';
import Back from './styled/Back'
import Input from './styled/Input'
import Title from './styled/Title'
import Btn from './styled/Btn'
import Form from './styled/Form'
import Validator from './styled/Validator'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas';

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
    console.log(actions)
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      operator: "",
    },
    validationSchema: basicSchema,
    onSubmit
  });

  return (
    <AppWrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Введите <span>любимого</span> оператора</Title>
        <Input 
          value={values.operator} 
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="МТС, Билайн, Мегафон.." 
          type="text"
          name="operator"
          className={errors.operator && touched.operator ? "input-error" : ""}
        ></Input>
        {errors.operator && touched.operator && <Validator>{errors.operator}</Validator>}
        <Btn disabled={isSubmitting} type="submit">Продолжить</Btn>
        <Back><Link href="/">Вернуться назад</Link></Back>
      </Form>
      <ToastContainer />
    </AppWrapper>
  )
}

export default CreateOperator