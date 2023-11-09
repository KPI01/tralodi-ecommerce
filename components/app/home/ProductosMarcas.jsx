'use client'
import { useState } from 'react'
import { marcas } from '../../../context/AppContext'
import CarouselBurbujas from '../../visual/carousel_burbujas/CarouselBurbujas'
import ContainerTarjetas from '../../visual/tarjetas/ContainerTarjetas'
import useMediaQuery from '../../../hooks/useMediaQuery'

export default function ProductosMarcas ({ contextoTarjetas }) {
  // Estado que permite identificar cual proveedor ha sido seleccionado
  const [marcaAct, setMarcaAct] = useState(1)
  console.log('ID marca activa:', marcaAct)

  //Media queries
  const lgDesktop = useMediaQuery('(min-width: 1200px)')
  const desktop = useMediaQuery('(min-width: 992px)')
  const tablet = useMediaQuery('(min-width: 768px)')
  const smLandscape = useMediaQuery('(min-width: 576px)')
  console.log('ldDesktop:',lgDesktop)
  console.log('desktop:',desktop)
  console.log('tablet:',tablet)
  console.log('smLandscape:',smLandscape)

  // Crear array de marcas para el componente
  let contextoMarcas = []
  let contador = 0
  // Subdivision en arrays más pequeños
  while (contador <= marcas.length) {
    const separador = lgDesktop ? 5 : desktop ? 4 : tablet ? 3 : 2
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
      <ContainerTarjetas contexto={prdctsMarcaAct} />
    </>
  )
}
