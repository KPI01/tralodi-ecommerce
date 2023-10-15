'use client'
import { useContext } from 'react'
import { Sesion } from '../../context/sesion'

export function Tarjetas ({ contexto, descuento }) {
  // Rescatar valores del contexto
  const { monedaActiva, divisas, dispatch } = useContext(Sesion)

  // ActionCreator para agregar producto al carrito
  const addProductoToCarrito = (id) => {
    dispatch({
      type: 'ADD_TO_CARRITO',
      payload: { id, cant: 1 }
    })
  }

  // Variable que contiene el valor de la divisa
  const mndLocal = divisas[0]

  if (descuento === true) {
    const prdctsDesc = contexto.filter((prdct) => prdct.descuento > 0)
    console.log('Con descuento')
    return (
      <div className='d-flex'>
        {prdctsDesc.map((prdct) => {
          return (
            <div
              key={prdct.id}
              id='tarjeta-producto'
              className='col bg-alter1 text-primary rounded d-flex flex-column'
            >
              <div className='d-flex flex-column flex-grow-1 text-start'>
                <a id='producto-img'>
                  <img
                    className='d-flex justify-content-center align-items-center'
                    src={'/productos/' + prdct.id + '.png'}
                    alt={
                      'Presentación ' + prdct.descripcion + ' ' + prdct.medida
                    }
                  />
                </a>
                <h6 className='fs-6 fw-bold mt-1 mb-0 text-start'>
                  {prdct.descripcion + ' ' + prdct.medida}
                </h6>
                <small id='tarjeta-producto-detalles'>Detalles del producto</small>
                <div id='cuerpo-tarjeta' className='d-flex align-items-center'>
                  <p className='text-start'>
                    {monedaActiva.simbolo}{' '}
                    {monedaActiva.simbolo === '$'
                      ? prdct.precio - prdct.precio * (prdct.descuento / 100)
                      : prdct.precio * mndLocal.valorDolar -
                        prdct.precio *
                          mndLocal.valorDolar *
                          (prdct.descuento / 100)}
                    <span className='ms-3 badge text-primary bg-secondary'>
                      -{prdct.descuento}%
                    </span>
                  </p>
                  <button
                    className='btn btn-secondary text-primary ms-auto'
                    onClick={() => addProductoToCarrito(prdct.id)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else if (descuento === false) {
    console.log('Sin descuento')
    const prdctsSinDesc = contexto.filter((prdct) => prdct.descuento === 0)
    return (
      <div className='d-flex justify-content-space-between'>
        {prdctsSinDesc.map((prdct) => {
          return (
            <div
              key={prdct.id}
              id='tarjeta-producto'
              className='col bg-alter1 text-primary rounded d-flex flex-column'
            >
              <div className='d-flex flex-column flex-grow-1 text-start'>
                <a id='producto-img'>
                  <img
                    className='d-flex justify-content-center align-items-center'
                    src={'/productos/' + prdct.id + '.png'}
                    alt={
                      'Presentación ' + prdct.descripcion + ' ' + prdct.medida
                    }
                  />
                </a>
                <h6 className='fs-6 fw-bold mt-1 mb-0 text-start'>
                  {prdct.descripcion + ' ' + prdct.medida}
                </h6>
                <small id='tarjeta-producto-detalles'>Detalles del producto</small>
                <div id='cuerpo-tarjeta' className='d-flex align-items-center'>
                  <p className='text-start'>
                    {monedaActiva.simbolo}{' '}
                    {monedaActiva.simbolo === '$'
                      ? prdct.precio
                      : prdct.precio * mndLocal.valorDolar}
                  </p>
                  <button
                    className='btn btn-secondary text-primary ms-auto'
                    onClick={() => addProductoToCarrito(prdct.id)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    console.log('Otros')
    return (
      <div className='d-flex justify-content-space-between flex-wrap'>
        {contexto.map((prdct) => {
          return (
            <div
              key={prdct.id}
              id='tarjeta-producto'
              className='col bg-alter1 text-primary rounded d-flex flex-column'
            >
              <div className='d-flex flex-column flex-grow-1 text-start'>
                <a id='producto-img'>
                  <img
                    className='d-flex justify-content-center align-items-center'
                    src={'/productos/' + prdct.id + '.png'}
                    alt={
                      'Presentación ' + prdct.descripcion + ' ' + prdct.medida
                    }
                  />
                </a>
                <h6 className='fs-6 fw-bold mt-1 mb-0 text-start'>
                  {prdct.descripcion + ' ' + prdct.medida}
                </h6>
                <small id='tarjeta-producto-detalles'>Detalles del producto</small>
                <div id='cuerpo-tarjeta' className='d-flex align-items-center'>
                  <p className='text-start'>
                    {monedaActiva.simbolo + ' '}
                    {prdct.descuento > 0
                      ? monedaActiva.simbolo === '$'
                        ? prdct.precio - prdct.precio * (prdct.descuento / 100)
                        : prdct.precio * mndLocal.valorDolar -
                          prdct.precio *
                            mndLocal.valorDolar *
                            (prdct.descuento / 100)
                      : monedaActiva.simbolo === '$'
                        ? prdct.precio
                        : prdct.precio * mndLocal.valorDolar}
                    {prdct.descuento > 0
                      ? (
                        <span className='ms-3 badge text-primary bg-secondary'>
                          -{prdct.descuento}%
                        </span>
                        )
                      : (
                          ''
                        )}
                  </p>
                  <button
                    className='btn btn-secondary text-primary ms-auto'
                    onClick={() => addProductoToCarrito(prdct.id)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Tarjetas
