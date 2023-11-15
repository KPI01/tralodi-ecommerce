'use client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link'
import { useContext } from 'react'
import { Sesion } from '../../context/Context'
import Lista from '../../components/visual/listado_productos/Lista'
import Brief from '../../components/app/cart/Brief'

export default function Cart () {
  // Utilizar el carrito del contexto
  const { carrito } = useContext(Sesion)
  const length = carrito.reduce((total, item) => {
    total += item.cant
    return total
  }, 0)

  if (length < 1) {
    return (
      <div
        className='alert alert-secondary'
        style={{ margin: '15vh auto', padding: '3vh 6vh', width: 'fit-content' }}
      >
        <h2 className='text-center'>
          El carrito está vacío. <Link href='/'>Ve a agregar productos!</Link>
        </h2>
      </div>
    )
  } else {
    return (
      <div className='container-fluid px-5 px-md-0'>
        <div className='row row-cols-auto gx-5'>
          <div
            id='container-items'
            className='col col-lg-7 bg-alter1 text-primary rounded p-2'
            style={{ '--bs-bg-opacity': 0.95 }}
          >
            <h2 id='detalles-titulo' className='m-3 fw-bold'>Carrito</h2>
            <Lista context={carrito} />
          </div>
          <div
            id='container-brief'
            className='col col-lg-5'
          >
            <Brief context={carrito} />
          </div>
        </div>

      </div>
    )
  }
}
