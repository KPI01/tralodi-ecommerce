import { createContext, useReducer } from "react";
import { monedas } from "./monedas";
import { usuario } from "./usuario";

// Reducer
export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_MONEDA":
      action.type = "DONE";

      state.monedaActiva = action.payload;
      return { ...state };

    default:
      return state;
  }
};

// Información básica para sesión
const sesion = {
  usuario: usuario,
  monedaActiva: monedas[0],
  divisas: monedas,
  carrito: [
    {
      id: 39100057,
      empresa: 2,
      marca: "Alfonzo Rivas",
      descripcion: "Cronch Flakes",
      presentacion: "Bolsa",
      medida: "300 Gr",
      categoria: "Cereales",
      cant: 1,
      precio: 1,
      estado: "Activo",
      descuento: 0,
    },
    {
        id: 39400123,
        empresa: 2,
        marca: "Alfonzo Rivas",
        descripcion: "Fruty Aros",
        presentacion: "Bolsa",
        medida: "25 Gr",
        categoria: "Cereales",
        cant: 2,
        precio: 1,
        estado: "Activo",
        descuento: 30
    },
  ],
};

// Creación del contexto
export const Sesion = createContext();

// Componente que envuelve a todos los elementos
export const Main = (props) => {
  const [state, dispatch] = useReducer(Reducer, sesion);

  return (
    <Sesion.Provider
      value={{
        usuario: state.usuario,
        monedaActiva: state.monedaActiva,
        divisas: state.divisas,
        carrito: state.carrito,
        dispatch: dispatch,
      }}
    >
      {props.children}
    </Sesion.Provider>
  );
};
