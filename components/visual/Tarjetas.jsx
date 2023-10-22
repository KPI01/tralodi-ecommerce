'use client'
import { useContext } from 'react'
import { Sesion } from '../../context/sesion'
import Image from 'next/image'

export default function Tarjetas ({ contexto, descuento }) {
  // Rescatar valores del contexto
  const { mndAct, divisas, carrito, dispatch } = useContext(Sesion)
  // ActionCreator para agregar producto al carrito
  const addProductoToCarrito = (id) => {
    dispatch({
      type: 'ADD_TO_CARRITO',
      payload: { id, cant: 1 }
    })
  }
  // ActionCreator para reducir producto al carrito
  const redProductoToCarrito = (id) => {
    dispatch({
      type: 'RED_FROM_CARRITO',
      payload: { id, cant: 1 }
    })
  }

  // Variable que contiene el valor de la divisa
  const mndLocal = divisas[0]

  return (
    <ul id='container-tarjetas' className='container_tarjetas'>
      {contexto.map(producto => {
        const precioMndLocal = producto.precio * mndLocal.valorDolar
        const IVA = producto.precio * 0.16
        const totalProd = producto.precio + IVA
        const IVAMndLocal = IVA * mndLocal.valorDolar
        const totalProdMndLocal = precioMndLocal + IVAMndLocal
        return (
          <li key={producto.id} id={'producto-' + producto.id} className='tarjeta-producto'>
            <div
              id='producto-img-container'
              style={{
                position: 'relative',
                height: '100%',
                minHeight: '250px'
              }}
            >
              <Image
                id='producto-img'
                className='m-auto'
                src={'/productos/' + producto.id + '.png'}
                alt={`${producto.descripcion} ${producto.medida}`}
                fill
                sizes='100%'
                style={{
                  objectFit: 'contain'
                }}
              />
            </div>
            <div id='producto-descripcion' className='fw-bold fs-5'>
              {producto.descripcion} {producto.medida}
            </div>
            <div id='producto-precio' className='d-flex justify-content-between align-items-center'>
              {mndAct.simbolo} {mndAct.simbolo === '$' ? totalProd : totalProdMndLocal} + IVA
              {producto.descuento > 0 && <span id='badge-descuento' className='badge bg-secondary text-primary'> -{producto.descuento}%</span>}
            </div>
            <div id='producto-actions' className='d-flex justify-content-between'>
              {!(carrito.find(prod => prod.id === producto.id)) &&
                <button
                  id='tarjeta-btn-add'
                  className='btn btn-secondary text-primary ms-auto'
                  onClick={() => addProductoToCarrito(producto.id)}
                >
                  Agregar
                </button>}
              {carrito.find(prod => prod.id === producto.id) &&
                <div id='tarjeta-input-group' className='input-group ms-auto'>
                  <button
                    id='tarjeta-red-cant'
                    className='btn btn-secondary border-0'
                    onClick={() => redProductoToCarrito(producto.id)}
                  >
                    -
                  </button>
                  <input
                    id='tarjeta-cant-field'
                    className='form-control bg-transparent border-0 text-center'
                    type='text'
                    disabled
                    defaultValue={carrito.find(prod => prod.id === producto.id).cant}
                  />
                  <button
                    id='tarjeta-sum-cant'
                    className='btn btn-secondary border-0'
                    onClick={() => addProductoToCarrito(producto.id)}
                  >+
                  </button>
                </div>}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
