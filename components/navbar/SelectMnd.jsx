'use client'
import { useContext } from 'react'
import { Sesion } from '../../context/sesion'

export default function SelectMnd () {
  // Traer los valores de las monedas y el dispatch del contexto
  const { mndAct, divisas, dispatch } = useContext(Sesion)

  // ActionCreator para cambiar moneda
  const cambiarMoneda = (moneda) => {
    dispatch({
      type: 'SET_MONEDA',
      payload: moneda
    })
  }

  return (
    <div className='dropdown ms-auto ms-lg-0' id='cambiar-mnd'>
      <button
        type='button'
        id='select-mnd'
        data-bs-toggle='dropdown'
        data-bs-display='static'
        aria-expanded='false'
        className='btn btn-primary text-secondary shadow-none dropdown-toggle'
      >
        {mndAct.nombre} ({mndAct.simbolo})
      </button>

      <ul
        id='lista-mnds'
        className='dropdown-menu border-0 bg-secondary dropdown-menu-lg-end'
      >
        {divisas.map((mnd) => {
          return (
            <li key={mnd.simbolo}>
              <button
                id='item-mnd'
                className={
                  mnd.nombre === mndAct.nombre
                    ? 'dropdown-item active'
                    : 'dropdown-item text-primary'
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
