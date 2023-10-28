import { useContext } from 'react'
import { Sesion } from '../../context/Context'

export default function SelectMnd () {
  // Traer los valores de las monedas y el dispatch del contexto
  const { mnd, dispatch } = useContext(Sesion)

  // ActionCreator para cambiar moneda
  const cambiarMoneda = (moneda) => {
    const payload = JSON.parse(moneda)
    dispatch({
      type: 'SET_CURRENCY',
      payload
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
        {mnd.nombre} ({mnd.simb})
      </button>

      <ul
        id='lista-mnds'
        className='dropdown-menu border-0 bg-secondary dropdown-menu-lg-end'
      >
        <li>
          <button
            id='item-mnd'
            className={'dropdown-item text-primary' + (mnd.nombre === 'Bolívar' ? ' active' : '')}
            onClick={() => cambiarMoneda('{"nombre": "Bolívar", "simb": "Bs"}')}
          >Bolívar (Bs)
          </button>
        </li>
        <li>
          <button
            id='item-mnd'
            className={'dropdown-item text-primary' + (mnd.nombre === 'Dólar' ? ' active' : '')}
            onClick={() => cambiarMoneda('{"nombre": "Dólar", "simb": "$"}')}
          >Dólar ($)
          </button>
        </li>
      </ul>
    </div>
  )
}
