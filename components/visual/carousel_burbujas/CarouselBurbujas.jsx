'use client'
import { useEffect } from 'react'
import WrapperBurbujas from './WrapperBurbujas'

export default function CarouselBurbujas ({ contexto, state, callback }) {
  useEffect(() => {
    require('bootstrap/js/dist/carousel')
  })

  const handleMarcaAct = (id) => {
    console.log('Llamando a la función desde carrusel burbujas')
    callback(id)
  }

  return (
    <div id='carousel-burbujas' className='carousel slide' data-bs-touch='true'>
      <div className='carousel-inner'>
        {contexto.map(arr => {
          const activation = arr.filter(elmnt => elmnt.id === state)[0]
          return (
            <div key={contexto.indexOf(arr)} className={'carousel-item ' + (activation ? 'active' : '')}>
              <WrapperBurbujas contexto={arr} activa={state} callback={handleMarcaAct} />
            </div>
          )
        })}
      </div>
      <button className='carousel-control-prev p-0' type='button' data-bs-target='#carousel-burbujas' data-bs-slide='prev'>
        <i id='control-prev-icon' className='bi bi-arrow-left-short text-primary fs-1 d-flex' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next p-0' type='button' data-bs-target='#carousel-burbujas' data-bs-slide='next'>
        <i id='control-next-icon' className='bi bi-arrow-right-short text-primary fs-1 d-flex' />

        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}
