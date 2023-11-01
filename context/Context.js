'use client'
import { createContext, useEffect, useReducer } from 'react'
import { productos } from './AppContext'

function sessionSet (key, value) {
  sessionStorage.setItem(key, value)
}

// Reducer
export const Reducer = (state, action) => {
  console.log('Dentro de Reducer')
  let updtCarrito = []
  let nuevoProd = ''

  switch (action.type) {
    case 'SET_CURRENCY':
      console.log('Cambio moneda de ', state.mnd.nombre, ' a ', action.payload.nombre)
      if (action.payload.simb !== state.mnd.simb) {
        state.mnd = action.payload
        sessionSet('mnd', JSON.stringify(state.mnd))
        action.type = 'DONE'
        return { ...state }
      } else {
        return { ...state }
      }

    case 'ADD_TO_CARRITO':
      if (state.carrito.find((prdct) => prdct.id === action.payload.id)) {
        state.carrito.map((prdct) => {
          if (prdct.id === action.payload.id) {
            console.log('Agregado ', action.payload.cant, ' a ', action.payload.id)
            prdct.cant += action.payload.cant
          }
          updtCarrito.push(prdct)
          return true
        })
      } else {
        console.log('Agregando ', action.payload, ' al carrito')
        updtCarrito = state.carrito
        nuevoProd = productos.filter(
          (prdct) => prdct.id === action.payload.id
        )[0]
        nuevoProd.cant = action.payload.cant
        updtCarrito.push(nuevoProd)
      }
      action.type = 'DONE'
      sessionSet('carrito', JSON.stringify(updtCarrito))
      state.carrito = updtCarrito
      return { ...state }

    case 'RED_FROM_CARRITO':
      state.carrito.map((producto) => {
        if (producto.id === action.payload.id && producto.cant > 0) {
          console.log('Eliminando ', action.payload.cant, ' a ', action.payload.id)
          producto.cant -= action.payload.cant
        } else {
          console.log('Eliminando ', action.payload.id, ' del carrito')
          producto.cant = 0
        }
        updtCarrito.push(producto)
        return true
      })
      state.carrito = updtCarrito
      sessionStorage.setItem('carrito', JSON.stringify(state.carrito))
      action.type = 'DONE'
      return { ...state }

    case 'DEL_FROM_CARRITO':
      state.carrito.map((producto) => {
        if (producto.id === action.payload.id) {
          console.log('Eliminando ', action.payload.id, 'del carrito')
          producto.cant = 0
        }
        updtCarrito.push(producto)
        return true
      })
      state.carrito = updtCarrito
      sessionSet('carrito', JSON.stringify(state.carrito))
      action.type = 'DONE'
      return { ...state }

    default:
      return state
  }
}

// Información básica para sesión
const contexto = {
  mnd: { nombre: 'Bolívar', simb: 'Bs.' },
  carrito: [
    {
      id: 39100057,
      empresa: 2,
      marca: 'Alfonzo Rivas',
      descripcion: 'Cronch Flakes',
      presentacion: 'Bolsa',
      medida: '300 Gr',
      categoria: 'Cereales',
      cant: 1,
      precio: 1,
      estado: 'Activo',
      descuento: 0
    }
  ]
}

// Creación del contexto
export const Sesion = createContext()

// Componente que envuelve a todos los elementos
export function App (props) {
  const [state, dispatch] = useReducer(Reducer, contexto)

  useEffect(() => {
    const cartStrg = sessionStorage.getItem('carrito')
    const mndStrg = sessionStorage.getItem('mnd')
    // Guardando en sesión el carrito si es que ya no existe
    if (cartStrg) {
      console.log('Recuperando carrito')
      state.carrito = JSON.parse(cartStrg)
    } else {
      console.log('Guardando carrito')
      sessionStorage.setItem('carrito', JSON.stringify(state.carrito))
    }
    if (mndStrg) {
      console.log('Recuperando moneda')
      state.mnd = JSON.parse(mndStrg)
    } else {
      console.log('Guardando moneda')
      sessionStorage.setItem('mnd', JSON.stringify(state.mnd))
    }
  })

  // Guardando en sesión la moneda que se esta utilizando, si es que ya no existe

  // Calculando subtotal del carrito
  const subTotal = state.carrito.reduce((total, prdct) => {
    if (prdct.descuento > 0) {
      const descuento = prdct.precio * (prdct.descuento / 100)
      const precioProd = prdct.precio - descuento
      return (total += precioProd * prdct.cant)
    } else {
      return (total += prdct.precio * prdct.cant)
    }
  }, 0)

  // Calculando total del carrito
  const total = state.carrito.reduce((total, prdct) => {
    if (prdct.descuento > 0) {
      const descuento = prdct.precio * (prdct.descuento / 100)
      const precioProd = prdct.precio - descuento
      const iva = precioProd * prdct.cant * 0.16
      return (total += precioProd * prdct.cant + iva)
    } else {
      const iva = prdct.precio * prdct.cant * 0.16
      return (total += prdct.precio * prdct.cant + iva)
    }
  }, 0)

  return (
    <Sesion.Provider
      value={{
        mnd: state.mnd,
        carrito: state.carrito,
        subTotal,
        total,
        dispatch
      }}
    >
      {props.children}
    </Sesion.Provider>
  )
}
