
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Middleware para manejar acciones asincrónicas
import logger from 'redux-logger'; // Middleware para logs (opcional)

import rootReducer from './reducers'; // Asegúrate de tener un archivo `reducers/index.js` que combine tus reducers

const middlewares = [thunk, logger]; // Puedes añadir más middlewares si es necesario

const store = createStore(
  rootReducer// Aplica middlewares a la tienda
);

export default store;
