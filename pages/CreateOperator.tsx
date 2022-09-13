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
import Validator from './styled/Validator'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas';

const Create = styled.form`
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
      <Create onSubmit={handleSubmit}>
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
      </Create>
      <ToastContainer />
    </AppWrapper>
  )
}

export default CreateOperator