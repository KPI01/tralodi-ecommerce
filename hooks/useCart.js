'use client'
import { useContext } from 'react'
import { Sesion } from '../context/Context'

export function useCart () {
  const { carrito, dispatch } = useContext(Sesion)
  // ActionCreator para agregar al carrito de determinado producto
  const addProductoToCarrito = (id, cant) => {
    dispatch({
      type: 'ADD_TO_CARRITO',
      payload: { id, cant }
    })
  }

  // ActionCreator para reducir del carrito determinado producto
  const redProductoFromCarrito = (id, cant) => {
    dispatch({
      type: 'RED_FROM_CARRITO',
      payload: { id, cant }
    })
  }

  // ActionCreator para eliminar del carrito determinado producto
  const delProductoFromCarrito = (id) => {
    dispatch({
      type: 'DEL_FROM_CARRITO',
      payload: { id }
    })
  }

  const getCantProducto = (id) => {
    let cant = 0
    carrito.map(item => {
      if (item.id === id) cant = item.cant
      return true
    })
    return cant
  }

  return { addProductoToCarrito, redProductoFromCarrito, delProductoFromCarrito, getCantProducto }
}
