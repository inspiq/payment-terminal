import * as yup from 'yup';

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/

export const basicSchema = yup.object().shape({
  title: yup.string().required("Введите оператора")
})

export const advSchema = yup.object().shape({
  phone: yup.string().matches(phoneRegExp, 'Введите номер телефона').required("Введите номер телефона"),
  money: yup.string().required("Введите сумму оплаты")
})