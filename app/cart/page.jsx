'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { Sesion } from '../../context/Context'
import { useCart } from '../../hooks/useCart'

export default function Cart () {
  // Utilizar el carrito del contexto
  const { carrito, mnd, subTotal, total } = useContext(Sesion)
  const { addProductoToCarrito, redProductoFromCarrito, delProductoFromCarrito } = useCart()
  // Variable para obtener el valor del dolar en bolivares
  const mndLocal = 35
  const subTotalMndLocal = subTotal * mndLocal
  const totalMndLocal = total * mndLocal
  let totalIVA = 0

  // Validando que los productos del carrito tengan más de una unidad y el producto esté activo
  const carritoValid = carrito.filter(
    (producto) => producto.cant > 0 && producto.estado === 'Activo'
  )
  return carritoValid.length < 1
    ? (
      <div id='container-carrito-vacio'>
        <div
          id='alert-carrito-vacio'
          className='alert alert-secondary p-4 mx-auto'
        >
          <h4 className='mx-4 fs-2'>
            El carrito está vacío. <Link href='/'>Ve a agregar productos!</Link>
          </h4>
        </div>
      </div>
      )
    : (
      <div id='container-carrito' className='d-flex flex-column flex-lg-row gap-3'>
        <div
          id='carrito-detalles'
          className='bg-alter1 text-primary rounded p-2'
          style={{ '--bs-bg-opacity': 0.95 }}
        >
          <h2 id='detalles-titulo' className='display-6 m-3 fw-bold'>Carrito</h2>
          <ul
            id='carrito-items'
            className='list-group list-group-flush'

          >
            {carrito.map(prod => {
              const precioMndLocal = prod.precio * mndLocal.valorDolar
              const subTotal = prod.precio * prod.cant
              const subTotalMndLocal = precioMndLocal * prod.cant
              return (
                <li
                  key={prod.id}
                  id='carrito-item'
                  className='list-group-item d-flex p-0 bg-alter1'
                  style={{ '--bs-bg-opacity': 0 }}
                >
                  <div
                    id='item-img'
                    className=''
                    style={{
                      position: 'relative',
                      height: '100%',
                      minHeight: '150px',
                      minWidth: '150px',
                      padding: '1rem'
                    }}
                  >
                    <Image
                      src={`/productos/${prod.id}.png`}
                      alt={`${prod.descripcion} ${prod.medida}`}
                      fill
                      sizes='100%'
                      style={{
                        objectFit: 'contain',
                        padding: '1.25rem'
                      }}
                    />
                  </div>
                  <div
                    id='item-info'
                    className='mt-4 w-auto'
                  >
                    <span id='info-descripcion' className='fw-bold'>{`${prod.descripcion} ${prod.medida}`}</span>
                    <br />
                    <span id='info-precio-unitario'>
                      {mnd.simbolo === '$'
                        ? `Precio unitario: ${mnd.simb} ${prod.precio}`
                        : `Precio unitario: ${mnd.simb} ${precioMndLocal}`}
                    </span>
                    <br />
                    <span id='info-subtotal'>
                      {mnd.simb === '$'
                        ? `Sub-Total: ${mnd.simb} ${subTotal}`
                        : `Sub-Total: ${mnd.simb} ${subTotalMndLocal}`}
                    </span>
                  </div>
                  <div id='item-actions' className='d-flex justify-content-evenly align-items-center'>
                    <div id='actions-edit-cant' className='input-group'>
                      <button
                        id='item-red-btn'
                        className='btn btn-secondary text-primary'
                        onClick={() => redProductoFromCarrito(prod.id, 1)}
                      >
                        <strong>-</strong> 1
                      </button>
                      <button
                        id='item-add-btn'
                        className='btn btn-secondary text-primary'
                        onClick={() => addProductoToCarrito(prod.id, 1)}
                      >
                        <strong>+</strong> 1
                      </button>
                    </div>
                    <button
                      id='item-del-btn'
                      className='btn btn-primary text-alter1 pt-2 me-3'
                      onClick={() => delProductoFromCarrito(prod.id)}
                    >
                      <i className='bi bi-trash-fill' />
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <hr id='separador-movil' />
        <div id='carrito-resumen' className='ps-4'>
          <h2 className='display-6 fw-bold'>Resumen</h2>
          <div id='resumen-info'>
            <div id='info-subtotal'>
              <span className='fs-3'>Sub-Total: {`${mnd.simb} ${mnd.simb === '$' ? (subTotal).toFixed(2) : (subTotalMndLocal).toFixed(2)}`}</span>
            </div>
            <div id='resumen-iva'>
              <h3 id='iva-titulo' className='mb-0 mt-2 fw-bold'>IVA</h3>
              <ul id='productos-IVA' className='ps-1 mb-0'>
                {carrito.map(prod => {
                  const iva = prod.precio * 0.16
                  totalIVA += iva
                  const ivaMndLocal = iva * mndLocal.valorDolar
                  return (
                    <li key={prod.id} id='producto-item' className='d-flex justify-content-between'>
                      <span id='item-descripcion'>{`${prod.descripcion} ${prod.medida}`}</span>
                      <span id='item-iva'>{`${mnd.simb} ${mnd.simb === '$' ? (iva).toFixed(2) : (ivaMndLocal).toFixed(2)}`}</span>
                    </li>
                  )
                })}
              </ul>
              <span id='IVA-total' className='fs-5'>Total IVA: {`${mnd.simb} ${mnd.simb === '$' ? totalIVA : (totalIVA * mndLocal)}`}</span>
            </div>
            <h3 id='resumen-total' className='fw-bold mt-3 fs-2'>
              Total: {`${mnd.simb} ${mnd.simb === '$' ? (total).toFixed(2) : (totalMndLocal).toFixed(2)}`}
            </h3>
          </div>
          <button id='comprar-btn' className='btn btn-alter1 text-primary fs-3 fw-bold text-center w-100'>Comprar</button>
        </div>
      </div>
      )
}
