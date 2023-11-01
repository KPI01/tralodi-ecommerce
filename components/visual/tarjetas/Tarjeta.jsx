'use client'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { Sesion } from '../../../context/Context'
import useCart from '../../../hooks/useCart'

export default function Tarjeta ({ id, descripcion, medida, display, precio }) {
  console.log('Dentro de Tarjeta de ', id)
  const { mnd } = useContext(Sesion)
  const { getCantProducto, addProductoToCarrito } = useCart()
  let [ cant, setCant ] = useState(getCantProducto(id))

  const handleReduce = (id) => {
    let newVal = cant--
    if (newVal < 0) newVal = 0
    console.log(id, '; Valor anterior:',cant,'; Nuevo valor:',newVal)
    setCant(newVal)
  }

  const handleAdd = () => {
    let newVal = cant++
    console.log(id, '; Valor anterior:',cant,'; Nuevo valor:',newVal)
    setCant(newVal)
  }

  const handleAddToCarrito = (id, cant) => {
    addProductoToCarrito(id, cant)
  }

  const precioBs = precio * 35

  return (
    <div
      className='card'
      style={{
        width: 'fit-content',
        minHeight: '330px'
      }}
    >
      <div
        id='card-img_container'
        className='card-img-top'
        style={{
          position: 'relative',
          height: '100%',
          minHeight: '170px',
          minWidth: '250px'
        }}
      >
        <Image
          className='mt-2'
          src={`/productos/${id}.png`}
          alt={`${descripcion} ${medida}`}
          sizes='100%'
          fill
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
      <div className='card-body text-primary'>
        <h5 className='card-title'>{descripcion}</h5>
        <h6 className='card-subtitle mb-1' style={{ fontSize: '1rem' }}>{`${display} ${medida}`}</h6>
        <p className='card-text mb-2' style={{ fontSize: '0.9rem' }}>{`${mnd.simb} ${mnd.simb === '$' ? precio : precioBs} + IVA`}</p>
        <div id='card-actions' className='d-flex justify-content-between'>
          <button type='button' className='btn btn-sm btn-secondary text-primary' onClick={() => handleAddToCarrito(id,cant)}>
            Agregar
          </button>
          <div className='input-group input-group-sm' style={{ maxWidth: 'fit-content' }} onClick={() => handleReduce(id)}>
            <button className='btn btn-sm btn-secondary text-primary' style={{ fontSize: '1.3rem', lineHeight: '.9rem' }} onClick={() => handleReduce(id)}>-</button>
            <input type='text' className='form-control form-control-sm text-center' style={{ width: '5ch', maxWidth: '40px' }} defaultValue={cant} onChange={e => setCant(e.target.value)}/>
            <button className='btn btn-sm btn-secondary text-primary' style={{ fontSize: '1rem', lineHeight: '.75rem' }} onClick={() => handleAdd(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
