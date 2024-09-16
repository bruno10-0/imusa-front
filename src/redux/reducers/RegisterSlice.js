import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  data:{
    name:"", // Nombre
    lastname:"", // Apellido
    birthDate:"", // Fecha de nacimiento
    gender:"", // Sexo
    phone:"", // Teléfono
    address:"", // Dirección
    city:"", // Ciudad
    zip:"", // Código postal
    country:"", // País
    state:"", // Estado
    image:"", // Imagen
    description:"", // Descripción
    category:"", // Categoría
    dni:"", // DNI
  },
};

const authSlice = createSlice({
  name: "steperStates",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Exporta las acciones creadas
export const { setStep,setData } = authSlice.actions;

// Exporta el reducer
export default authSlice.reducer;
