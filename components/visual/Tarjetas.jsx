'use client'
import { useContext } from 'react'
import { Sesion } from '../../context/sesion'
import Image from 'next/image'

export default function Tarjetas ({ contexto, descuento }) {
  // Rescatar valores del contexto
  const { mndAct, divisas } = useContext(Sesion)

  // ActionCreator para agregar producto al carrito
  // const addProductoToCarrito = (id) => {
  //   dispatch({
  //     type: 'ADD_TO_CARRITO',
  //     payload: { id, cant: 1 }
  //   })
  // }

  // Variable que contiene el valor de la divisa
  const mndLocal = divisas[0]

  return (
    <ul id='container-tarjetas' className='container_tarjetas'>
      {contexto.map(producto => {
        const precioMndLocal = producto.precio * mndLocal.valorDolar
        const IVA = producto.precio * 0.16
        const totalProd = producto.precio + IVA
        const IVA_mndLocal = IVA * mndLocal.valorDolar
        const totalProd_mndLocal = precioMndLocal + IVA_mndLocal
        return (
          <li key={producto.id} id={'producto-' + producto.id} className='tarjeta-producto'>
            <Image 
              id='producto-img'
              className='m-auto'
              src={'/productos/'+producto.id+'.png'}
              alt={`${producto.descripcion} ${producto.medida}`}
              fill
            />
            <div id='producto-descripcion' className='fw-bold fs-5'>
            {producto.descripcion} {producto.medida} 
            </div>
            <div id='producto-precio' className='d-flex justify-content-between align-items-center'>
            {mndAct.simbolo} {mndAct.simbolo === '$' ? totalProd : totalProd_mndLocal} + IVA
            {producto.descuento > 0 && <span id='badge-descuento' className='badge bg-secondary text-primary'> -{producto.descuento}%</span>}
            </div>
            <div id='producto-actions'>
              <button className='btn'>Agregar</button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
