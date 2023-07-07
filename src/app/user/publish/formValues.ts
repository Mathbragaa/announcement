import * as yup from 'yup';

const validationSchema = yup.object({
    title: yup
      .string()
      .required('Campo obrigatório')
      .min(6, 'O título deve ter pelo menos 6 caracteres')
      .max(80, 'O título deve ter no máximo 80 caracteres'),

      category: yup
      .string()
      .required('Campo obrigatório'),

      description: yup
      .string()
      .required('Campo obrigatório')
      .min(50, 'A descrição deve ter pelo menos 50 caracteres'),

      price: yup
      .number()
      .required('Campo obrigatório'),

      name: yup
      .string()
      .required('Campo obrigatório'),

      email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('Campo obrigatório'),

      phone: yup
      .number()
      .required('Campo obrigatório'),

      images: yup
      .array()
      .min(1,'Selecione pelo menos uma imagem')
      .required('Campo obrigatório'),

}); 

export {
    validationSchema
}