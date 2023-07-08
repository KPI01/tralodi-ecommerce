import React, { createContext, useReducer } from "react"
import { productos } from "./productos";
import { marcas } from "./marcas"

export const AppReducer = (state, action) => {

};

const initialState = {
    carrito: {},
    productos: productos,
    marcas: marcas
}

export const AppProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    let subTotal = 0;
    let iva = 0;
    let total = 0;

    if (state.cart) {
        const subTotal = state.carrito.reduce((total,item) => {
            return(total += item.precio * cnt)
        })
    }

    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    );
};

