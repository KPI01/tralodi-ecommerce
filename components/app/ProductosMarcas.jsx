'use client'
import { useState } from 'react'
import { marcas } from '../../context/AppContext'
import CarouselBurbujas from '../visual/carousel_burbujas/CarouselBurbujas'
import Tarjetas from '../visual/Tarjetas'

export default function ProductosMarcas ({ contextoTarjetas }) {
  // Estado que permite identificar cual proveedor ha sido seleccionado
  // Hacer que esto sea un componente
  const [marcaAct, setMarcaAct] = useState(1)
  console.log(marcaAct)

  // Crear array de marcas para el componente
  let contextoMarcas = []
  let contador = 0
    // Subdivision en arrays más pequeños
  while (contador <= marcas.length) {
    contextoMarcas.push(marcas.slice(contador, contador + 3))
    contador += 3
  }
    // Eliminando arrays sin contenido
  contextoMarcas = contextoMarcas.filter(arr => arr.length > 0)


  // Filtro en productos para mostrar los que son de la marca seleccionada
  const prdctsMarcaAct = contextoTarjetas.filter(
    (prdct) => prdct.empresa === marcaAct
  )

  return (
    <>
      <CarouselBurbujas contexto={contextoMarcas} state={marcaAct} callback={setMarcaAct} />
      <Tarjetas contexto={prdctsMarcaAct} descuento={undefined} />
    </>
  )
}
