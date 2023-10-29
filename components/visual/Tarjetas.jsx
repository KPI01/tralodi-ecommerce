'use client'
import { useContext } from 'react'
import { Sesion } from '../../context/Context'
import Image from 'next/image'
import { useCart } from '../../hooks/useCart'

export default function Tarjetas ({ contexto }) {
  // Rescatar valores del contexto
  const { mnd, carrito } = useContext(Sesion)
  const { addProductoToCarrito, redProductoFromCarrito, getCantProducto } = useCart()

  // Variable que contiene el valor de la divisa
  // const mndLocal = divisas[0]

  return (
    <ul id='container-tarjetas' className='container_tarjetas'>
      {contexto.map(producto => {
        const precioMndLocal = producto.precio * 35
        const IVA = producto.precio * 0.16
        const totalProd = producto.precio + IVA
        const IVAMndLocal = IVA * 35
        const totalProdMndLocal = precioMndLocal + IVAMndLocal
        const cantCarrito = getCantProducto(producto.id)
        console.log('cantCarrito', cantCarrito)
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
                alt={`Imagen ${producto.descripcion} ${producto.medida}`}
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
              {mnd.simb} {mnd.simb === '$' ? totalProd : totalProdMndLocal} + IVA
              {producto.descuento > 0 && <span id='badge-descuento' className='badge bg-secondary text-primary'> -{producto.descuento}%</span>}
            </div>
            <div id='producto-actions' className='d-flex justify-content-between'>
              {!(carrito.find(prod => prod.id === producto.id)) &&
                <button
                  id='tarjeta-btn-add'
                  className='btn btn-secondary text-primary ms-auto'
                  onClick={() => addProductoToCarrito(producto.id, 1)}
                >
                  Agregar
                </button>}
              {carrito.find(prod => prod.id === producto.id) &&
                <div id='tarjeta-input-group' className='input-group ms-auto'>
                  <button
                    id='tarjeta-red-cant'
                    className='btn btn-secondary border-0'
                    onClick={() => redProductoFromCarrito(producto.id, 1)}
                  >
                    -
                  </button>
                  <input
                    id='tarjeta-cant-field'
                    className='form-control bg-transparent border-0 text-center'
                    type='text'
                    disabled
                    defaultValue={cantCarrito}
                  />
                  <button
                    id='tarjeta-sum-cant'
                    className='btn btn-secondary border-0'
                    onClick={() => addProductoToCarrito(producto.id, 1)}
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
