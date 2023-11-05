'use client'
import { useContext, useState } from 'react'
import { Sesion } from '../../context/Context'

export default function SelectMnd () {
  // Traer los valores de las monedas y el dispatch del contexto
  const { mnd, dispatch } = useContext(Sesion)
  const [actMnd, setActMnd] = useState(mnd)
  const bs = { nombre: 'Bolívar', simb: 'Bs' }
  const usd = { nombre: 'Dólar', simb: '$' }

  // ActionCreator para cambiar moneda
  const handleCambio = (newMnd) => {
    dispatch({
      type: 'SET_CURRENCY',
      payload: newMnd
    })
    setActMnd(newMnd)
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
        {actMnd.nombre} ({actMnd.simb})
      </button>

      <ul
        id='lista-mnds'
        className='dropdown-menu border-0 bg-secondary dropdown-menu-lg-end'
      >
        <li>
          <button
            id='item-mnd'
            className={'dropdown-item text-primary' + (mnd.nombre === 'Bolívar' ? ' active' : '')}
            onClick={() => handleCambio(bs)}
          >Bolívar (Bs)
          </button>
        </li>
        <li>
          <button
            id='item-mnd'
            className={'dropdown-item text-primary' + (mnd.nombre === 'Dólar' ? ' active' : '')}
            onClick={() => handleCambio(usd)}
          >Dólar ($)
          </button>
        </li>
      </ul>
    </div>
  )
}
