'use client'
import { useContext } from 'react'
import { Sesion } from '../../context/sesion'
import Link from 'next/link'

export default function CartBrief () {
  const { mndAct, divisas, total } = useContext(Sesion)
  const mndLocal = divisas[0].valorDolar

  return (
    <Link
      id='cart-brief'
      className='btn btn-secondary text-primary ms-auto mx-lg-auto'
      href='/cart'
    >
      <button
        id='cartbrief-btn'
        className='bg-transparent text-primary'
      >
        <i id='cartbrief-icon' className='bi bi-cart-fill me-1' />
        <span id='cartbrief-cant'>
          {mndAct.simbolo === '$'
            ? [mndAct.simbolo, total.toFixed(2)].join(' ')
            : [
                mndAct.simbolo,
                (total * mndLocal).toFixed(2)
              ].join(' ')}
        </span>
      </button>
    </Link>
  )
}
