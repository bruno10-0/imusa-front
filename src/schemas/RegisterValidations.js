import * as yup from "yup";

export const step1 = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
});

export const step2 = yup.object().shape({
  lastname: yup.string().required("El apellido es obligatorio"),
  birthDate: yup.string().required("La fecha de nacimiento es obligatoria"),
  gender: yup.string().required("El sexo es obligatorio"),
  dni: yup.string().required("El DNI es obligatorio"),
  gender: yup.string().required("El sexo es obligatorio"),
  phone: yup.string().required("El número de teléfono es obligatorio"),
});