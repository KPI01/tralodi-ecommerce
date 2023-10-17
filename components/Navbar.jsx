'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import SearchBar from './navbar/SearchBar'
// import LoginBtn from './navbar/LoginBtn'
import CartBrief from './navbar/CartBrief'
import SelectMnd from './navbar/SelectMnd'

export default function Navbar () {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  })

  return (
    <nav className='navbar navbar-expand-lg mb-3' id='navbar'>
      <div className='container-fluid' id='navbar-container'>
        <Image
          src='/isotipo250.png'
          alt='branding-img'
          width={250}
          height={166}
          style={
            {
              width: '5vw',
              height: '3.5vw',
              minWidth: '50px',
              minHeight: '40px',
              marginRight: '1ch'
            }
          }
        />
        <Link
          id='navbar-brand'
          className='navbar-brand text-alter1 fs-1 fw-bold fst-italic m-0 mt-2'
          href='/'
        >
          TRALODI
        </Link>
        <button
          id='navbar-toggler'
          className='navbar-toggler ms-auto me-3 mt-2 border-0'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbar-content'
          aria-controls='#navbar-content'
          aria-expanded='false'
          aria-label='Toggle'
        >
          <i className='bi bi-list text-secondary m-auto' />
        </button>
        <div className='collapse navbar-collapse m-auto ' id='navbar-content'>
          <ul className='navbar-nav ms-auto me-auto mt-2 mt-lg-0 mb-2 mb-lg-0'>
            <li id='navbar-link' className='nav-item'>
              <Link href='/ofertas' className='nav-link fw-bold'>
                <i className='bi bi-tag-fill me-1' />
                Ofertas
              </Link>
            </li>
            <li id='navbar-link' className='nav-item'>
              <Link href='/productos' className='nav-link fw-bold'>
                Productos
              </Link>
            </li>
            <li id='navbar-link' className='nav-item'>
              <Link href='/marcas' className='nav-link fw-bold'>
                Marcas
              </Link>
            </li>
          </ul>
          <div className='d-flex pe-lg-3 w-25 justify-content-end justify-content-lg-between'>
            <SelectMnd />
            <CartBrief />
          </div>
        </div>

      </div>
    </nav>
  )
}
