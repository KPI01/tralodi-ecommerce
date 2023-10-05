'use client'
import { useState } from 'react'
import { marcas } from '../../context/AppContext'
import NavPills from '../visual/NavPills'
import Tarjetas from '../visual/Tarjetas'

export default function ProductosMarcas ({ contextoTarjetas }) {
  // Estado que permite identificar cual proveedor ha sido seleccionado
  // Hacer que esto sea un componente
  const [marcaAct, setMarcaAct] = useState(1)
  console.log(marcaAct)

  // Filtro en productos para mostrar los que son de la marca seleccionada
  const prdctsMarcaAct = contextoTarjetas.filter(
    (prdct) => prdct.empresa === marcaAct
  )

  return (
    <>
      <NavPills contexto={marcas} index={marcaAct} callback={setMarcaAct} />
      <Tarjetas contexto={prdctsMarcaAct} descuento={undefined} />
    </>
  )
}
