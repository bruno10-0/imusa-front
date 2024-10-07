import * as yup from 'yup';

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria'),
});

export default LoginValidation;
