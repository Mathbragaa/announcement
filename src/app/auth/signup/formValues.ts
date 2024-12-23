import * as yup from 'yup';
import {FormValues} from '@/app/auth/signup/interface'

const initialValues:FormValues={
    name: '',
    email: '',
    password: '',
    passwordConf:'',
};
const validationSchema = yup.object({
      name: yup
      .string()
      .required('Campo obrigatório'),

      email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('Campo obrigatório'),

      password: yup
      .string()
      .min(6,'Mínimo de 6 caracteres')
      .required('Campo obrigatório'),

      passwordConf: yup
      .string()
      .required('Campo obrigatório')
      .oneOf([yup.ref('password'),null],'As senhas precisam ser iguais'),

}); 

export {
    initialValues, validationSchema, 
}