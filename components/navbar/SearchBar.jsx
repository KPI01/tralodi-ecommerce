'use client'

import { useState } from 'react'

export default function SearchBar () {
  const [input, setInput] = useState('')

  const limpiarContenido = () => {
    setInput('')
  }

  return (
    <form className='d-flex flex-row-reverse flex-lg-row ms-auto ms-lg-0 me-lg-auto justify-content-end justify-content-lg-center' id='search-bar'>
      <i className='bi bi-search my-auto text-alter1 m-auto' />
      <input
        type='search'
        id='searchbar-input'
        className='form-control bg-primary text-alter1 border-0 ms-2'
        placeholder='Buscar...'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {input !== '' &&
        <button
          id='searchbar-clear'
          type='button'
          className='btn bg-transparent p-1 m-0 w-auto shadow-none'
          onClick={() => limpiarContenido()}
        >
          <i className='bi bi-x-circle-fill text-alter1 m-0 p-0' />
        </button>}
    </form>
  )
}
