import { createContext, useReducer } from "react"
import { monedas } from "./monedas";
import { usuario } from "./usuario";

// Reducer
export const Reducer = (state, action) => {

    switch (action.type) {
        case "SET_MONEDA":
            action.type = "DONE";

            state.monedaActiva = action.payload;
            return {...state}
        
        default:
            return state;
    }

}



// Información básica para sesión
const sesion = {
    usuario: usuario,
    monedaActiva: monedas[0],
    divisas: monedas,
    carrito: "",
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
                dispatch: dispatch,
            }}
        >
            {props.children}
        </Sesion.Provider>
    )
}