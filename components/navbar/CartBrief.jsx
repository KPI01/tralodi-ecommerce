'use client'
import { useContext } from 'react'
import { Sesion } from '../../context/Context'
import Link from 'next/link'

export default function CartBrief () {
  const { mnd, total } = useContext(Sesion)
  // const mndLocal = divisas[0].valorDolar

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
          {mnd.simb === '$'
            ? [mnd.simb, total.toFixed(2)].join(' ')
            : [
                mnd.simb,
                (total * 35).toFixed(2)
              ].join(' ')}
        </span>
      </button>
    </Link>
  )
}
