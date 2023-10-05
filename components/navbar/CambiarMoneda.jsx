'use client'
import { useContext } from 'react'
import { Sesion } from '../../context/sesion'

export default function CambiarMoneda () {
  // Traer los valores de las monedas y el dispatch del contexto
  const { monedaActiva, divisas, dispatch } = useContext(Sesion)

  // ActionCreator para cambiar moneda
  const cambiarMoneda = (moneda) => {
    dispatch({
      type: 'SET_MONEDA',
      payload: moneda
    })
  }

  return (
    <div className='dropdown' id='cambiar-mnd'>
      <button
        type='button'
        className='btn btn-primary text-secondary shadow-none dropdown-toggle'
        id='cambiar-mnd-btn'
        data-bs-toggle='dropdown'
        data-bs-display='static'
        aria-expanded='false'
      >
        {monedaActiva.nombre} ({monedaActiva.simbolo})
      </button>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-primary border-alter2'>
        {divisas.map((mnd) => {
          return (
            <li key={mnd.simbolo}>
              <button
                id='mnd'
                className={
                  mnd.nombre === monedaActiva.nombre
                    ? 'dropdown-item active'
                    : 'dropdown-item text-secondary'
                }
                onClick={() => cambiarMoneda(mnd)}
              >
                {mnd.nombre} ({mnd.simbolo})
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
