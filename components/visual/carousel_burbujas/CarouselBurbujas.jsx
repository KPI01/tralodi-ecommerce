'use client'
import { useEffect, useState } from 'react'
import './styles.css'
import WrapperBurbujas from './WrapperBurbujas'

export default function CarouselBurbujas ({ contexto }) {
  const [marcaAct, setMarcaAct] = useState(0)
  console.log(marcaAct);
  useEffect(() => {
    require('bootstrap/js/dist/carousel')
  })
  return (
    <div id='carousel-burbujas' className='carousel slide'>
      <div className='carousel-inner'>
        {contexto.map(arr => {
          return (<div key={contexto.indexOf(arr)} className='carousel-item active'><WrapperBurbujas contexto={arr} activa={marcaAct} callback={setMarcaAct} /></div>)
        })}
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='#carousel-burbujas' data-bs-slide='prev'>
        <i id='control-prev-icon' className='bi bi-arrow-left-short text-primary fs-1 m-auto' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carousel-burbujas' data-bs-slide='next'>
        <i id='control-next-icon' className='bi bi-arrow-right-short text-primary fs-1 m-auto' />

        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}
