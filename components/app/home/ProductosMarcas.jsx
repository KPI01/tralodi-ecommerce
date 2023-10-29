'use client'
import { useState } from 'react'
import { marcas } from '../../../context/AppContext'
import CarouselBurbujas from '../../visual/carousel_burbujas/CarouselBurbujas'
import Tarjetas from '../../visual/Tarjetas'

export default function ProductosMarcas ({ contextoTarjetas }) {
  // Estado que permite identificar cual proveedor ha sido seleccionado
  // Hacer que esto sea un componente
  const [marcaAct, setMarcaAct] = useState(1)
  console.log('ID marca activa:', marcaAct)

  // Crear array de marcas para el componente
  let contextoMarcas = []
  let contador = 0
  // Subdivision en arrays más pequeños
  while (contador <= marcas.length) {
    const separador = 3
    contextoMarcas.push(marcas.slice(contador, contador + separador))
    contador += separador
  }

  // Eliminando arrays sin contenido
  contextoMarcas = contextoMarcas.filter(arr => arr.length > 0)

  // Filtro en productos para mostrar los que son de la marca seleccionada
  const prdctsMarcaAct = contextoTarjetas.filter(
    (prdct) => prdct.empresa === marcaAct
  )

  return (
    <>
      <CarouselBurbujas context={contextoMarcas} state={marcaAct} callback={setMarcaAct} />
      <hr className='my-4' />
      <Tarjetas contexto={prdctsMarcaAct} />
    </>
  )
}
