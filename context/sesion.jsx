"use client";
import { createContext, useReducer } from "react";
import { monedas, usuario, productos } from "./AppContext";

// Reducer
export const Reducer = (state, action) => {
  let updtCarrito = [];
  let nuevoProd = "";

  switch (action.type) {
    case "SET_MONEDA":
      state.monedaActiva = action.payload;
      sessionStorage.setItem(
        "monedaActiva",
        JSON.stringify(state.monedaActiva)
      );
      action.type = "DONE";
      return { ...state };

    case "ADD_TO_CARRITO":
      if (state.carrito.find((prdct) => prdct.id === action.payload.id)) {
        state.carrito.map((prdct) => {
          if (prdct.id === action.payload.id) {
            prdct.cant += action.payload.cant;
          }
          console.log(prdct)
          updtCarrito.push(prdct);
          return true;
        });
      } else {
        updtCarrito = state.carrito;
        nuevoProd = productos.filter(
          (prdct) => prdct.id === action.payload.id
        )[0];
        nuevoProd.cant = action.payload.cant;
        updtCarrito.push(nuevoProd);
      }
      action.type = "DONE";
      sessionStorage.setItem("carrito", JSON.stringify(updtCarrito));
      state.carrito = updtCarrito;
      return { ...state };

    case "RED_FROM_CARRITO":
      state.carrito.map((producto) => {
        if (producto.id === action.payload.id) {
          producto.cant -= action.payload.cant;
        }
        updtCarrito.push(producto);
        return true;
      });
      state.carrito = updtCarrito;
      sessionStorage.setItem("carrito", JSON.stringify(state.carrito));
      action.type = "DONE";
      return { ...state };

    case "DEL_FROM_CARRITO":
      state.carrito.map((producto) => {
        if (producto.id === action.payload.id) {
          producto.cant = 0;
        }
        updtCarrito.push(producto);
        return true;
      });
      state.carrito = updtCarrito;
      sessionStorage.setItem("carrito", JSON.stringify(state.carrito));
      action.type = "DONE";
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
      cant: 1,
      precio: 1,
      estado: "Activo",
      descuento: 30,
    },
  ],
};

// Creación del contexto
export const Sesion = createContext();

// Componente que envuelve a todos los elementos
export const App = (props) => {
  const [state, dispatch] = useReducer(Reducer, sesion);
  let carritoStrg = sessionStorage.getItem("carrito");
  let mndActStrg = sessionStorage.getItem("monedaActiva");

  if (carritoStrg) {
    state.carrito = JSON.parse(carritoStrg);
  } else {
    sessionStorage.setItem("carrito", JSON.stringify(state.carrito));
  }
  if (mndActStrg) {
    state.monedaActiva = JSON.parse(mndActStrg);
  } else {
    sessionStorage.setItem("monedaActiva", mndActStrg);
  }

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
