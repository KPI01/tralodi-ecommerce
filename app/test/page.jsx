'use client'
import CarouselTarjetas from '../../components/visual/carousel_burbujas/CarouselTarjetas'
import { marcas } from '../../context/AppContext'

export default function Test () {
  console.log(marcas.length)
  // Array para guardar arrays de tamaño definido
  let contextoMarcas = []
  let contador = 0

  // División de arrays
  while (contador <= marcas.length) {
    contextoMarcas.push(marcas.slice(contador, contador + 2))
    contador += 2
  }

  // Limpieza de arrays vacios
  contextoMarcas = contextoMarcas.filter(array => array.length > 0)

  console.log(contextoMarcas)

  return (
    <CarouselTarjetas contexto={contextoMarcas} />
  )
}
