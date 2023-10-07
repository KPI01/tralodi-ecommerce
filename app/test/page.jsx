'use client'
import { useEffect } from 'react'
import CarouselBurbujas from '../../components/visual/carousel_burbujas/CarouselBurbujas'
import { marcas } from '../../context/AppContext'
import './styles.css'

export default function Test () {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  })
  console.log(marcas.length)
  // Array para guardar arrays de tamaño definido
  let contextoMarcas = []
  let contador = 0

  // División de arrays
  while (contador <= marcas.length) {
    contextoMarcas.push(marcas.slice(contador, contador + 3))
    contador += 3
  }

  // Limpieza de arrays vacios
  contextoMarcas = contextoMarcas.filter(array => array.length > 0)

  console.log(contextoMarcas)

  return (
    <CarouselBurbujas contexto={contextoMarcas} />
  )
}
