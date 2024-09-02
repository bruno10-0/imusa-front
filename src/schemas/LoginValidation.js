import * as yup from 'yup';

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
    .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
    .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
    .matches(/[\W_]/, 'La contraseña debe contener al menos un carácter especial')
    .required('La contraseña es obligatoria'),
});

export default LoginValidation;
