'use client'
import { useContext } from 'react'
import { Sesion } from '../context/Context'

export default function useCart () {
  console.log('Dentro de useCart')
  const { carrito, dispatch } = useContext(Sesion)

  const getCantProd = (id) => {
    let cant = 0
    if (carrito.find(item => item.id === id)) {
      cant = carrito.filter(item => item.id === id)[0].cant
      console.log(`${id} esta en el carrito con ${cant} unidades`)
      return cant
    } else {
      console.log(`${id} no está en el carrito, así que cant es ${cant}`)
      return cant
    }
  }

  const isProdInCarrito = (id) => {
    let is = false

    carrito.map(item => {
      if (item.id === id) {
        is = true
      }
      return true
    })

    return is
  }

  const clearCarrito = () => {
    dispatch({ type: 'CLEAR_CARRITO' })
  }

  return { getCantProd, isProdInCarrito, clearCarrito }
}
