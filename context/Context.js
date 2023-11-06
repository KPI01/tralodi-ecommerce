'use client'
import { createContext, useReducer } from 'react'

// Reducer
export const Reducer = (state, action) => {
  console.log('Dentro de Reducer')
  let updtCarrito = []

  switch (action.type) {
    case 'SET_CURRENCY':
      console.log('Cambio moneda de ', state.mnd.simb, ' a ', action.payload.simb)
      if (action.payload.simb !== state.mnd.simb) {
        state.mnd = action.payload
        action.type = 'DONE'
        return { ...state }
      } else {
        return { ...state }
      }

    case 'SET_PROD_CANT':
      console.log(`Cambiando cantidad a: ${action.payload.id}`)
      updtCarrito = state.carrito
      updtCarrito.map(item => {
        if (item.id === action.payload.id) {
          console.log(`Valor viejo: ${item.cant}`)
          item.cant = action.payload.cant
          console.log(`Valor nuevo: ${action.payload.cant}`)
        
        }
        return
      })
      state.carrito = updtCarrito
      action.type = 'DONE'
      return { ...state }

      case 'ADD_PROD_CARRITO':
        console.log(`Agregando ${action.payload.id} al carrito`)
        updtCarrito = state.carrito
        if (!(updtCarrito.find(item => item.id === action.payload.id))){
        updtCarrito.push(action.payload)}
        state.carrito = updtCarrito
        action.type = 'DONE'
        return { ...state }
        

      case 'CLEAR_CARRITO':
        console.log('Limpiando carrito...')
        updtCarrito = state.carrito
        updtCarrito.filter(item => item.cant < 1)
        state.carrito = updtCarrito
        action.type = 'DONE'
        return { ...state }

    default:
      return state
  }
}

// Información básica para sesión
const contexto = {
  mnd: { nombre: 'Bolívar', simb: 'Bs' },
  carrito: []
}

// Creación del contexto
export const Sesion = createContext()

// Componente que envuelve a todos los elementos
export function App (props) {
  const [state, dispatch] = useReducer(Reducer, contexto)
  let subT = 0
  let total = 0

  // Subtotal
  state.carrito.map(item => {
    const descuento = item.descuento / 100
    subT += (item.precio - descuento) * item.cant
  })
  subT = parseFloat(subT.toFixed(2))

  // Total
  state.carrito.map(item => {
    const descuento = item.descuento / 100
    const iva = (item.precio - descuento) * 0.16
    const subT = (item.precio - descuento) * item.cant
    total += subT + (iva * item.cant)
  })
  total = parseFloat(total.toFixed(2))

  return (
    <Sesion.Provider
      value={{
        mnd: state.mnd,
        carrito: state.carrito,
        subTotal: subT,
        total: total,
        dispatch
      }}
    >
      {props.children}
    </Sesion.Provider>
  )
}
