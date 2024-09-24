import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,

  data: {
    nombre:"",
    correo: "",
    apellido: "",
    DNI: "",
    contrasenia: "",
    telefono: "",
    confirmarContrasenia: "",
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
    setName: (state, action) => {
      state.data.nombre = action.payload;
    },
  },
});

// Exporta las acciones creadas
export const { setStep, setData, setName } = authSlice.actions;

// Exporta el reducer
export default authSlice.reducer;
