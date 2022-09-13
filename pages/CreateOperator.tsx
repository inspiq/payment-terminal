import React from 'react'
import styled from 'styled-components'
import AppWrapper from '../components/AppWrapper'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHttp } from '../hooks/useHttp';
import Back from './styled/Back'
import Title from './styled/Title'
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

const CreateInput = styled.input`
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

const CreateBtn = styled.button`
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
        <CreateInput 
          value={values.operator} 
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="МТС, Билайн, Мегафон.." 
          type="text"
          name="operator"
          className={errors.operator && touched.operator ? "input-error" : ""}
        ></CreateInput>
        {errors.operator && touched.operator && <Validator>{errors.operator}</Validator>}
        <CreateBtn disabled={isSubmitting} type="submit">Продолжить</CreateBtn>
        <Back><Link href="/">Вернуться назад</Link></Back>
      </Create>
      <ToastContainer />
    </AppWrapper>
  )
}

export default CreateOperator