'use client'
import Image from 'next/image'
import { useContext, useRef, useState } from 'react'
import { Sesion } from '../../../context/Context'
import useCart from '../../../hooks/useCart'

export default function ItemLista ({ id, descripcion, medida, display, precio, descuento }) {
  console.log('Dentro de ItemLista:', id)
  const { mnd, dispatch } = useContext(Sesion)
  const { getCantProd } = useCart()
  const refCant = useRef(getCantProd(id))
  const [itemCant, setItemCant] = useState(refCant.current)
  const mndS = mnd.simb

  const precioBs = precio * 35

  const desc = descuento / 100
  console.log('Descuento:', desc)
  const precioDesc = precio - (precio * desc)
  const precioDescBs = precioDesc * 35
  console.log('Precio descontado:', precioDesc)

  const subTotal = parseFloat((precioDesc * refCant.current).toFixed(2))
  const subTotalBs = parseFloat((subTotal * 35).toFixed(2))

  const handleReduce = (item, actCant) => {
    let newVal = actCant - 1
    if (newVal < 0) newVal = 0
    dispatch({
      type: 'SET_PROD_CANT',
      payload: {
        id: item,
        cant: newVal
      }
    })
    refCant.current = newVal
    setItemCant(newVal)
  }

  const handleAdd = (item, actCant) => {
    const newVal = actCant + 1
    dispatch({
      type: 'SET_PROD_CANT',
      payload: {
        id: item,
        cant: newVal
      }
    })
    refCant.current = newVal
    setItemCant(newVal)
  }

  if (refCant.current > 0) {
    return (
      <li
        className='list-group-item bg-transparent text-primary container'
      >
        <div className='row'>
          <div
            className='col-1'
            style={{
              position: 'relative',
              height: '100%',
              minHeight: '100px',
              minWidth: '200px'
            }}
          >
            <Image
              className=''
              src={`/productos/${id}.png`}
              alt={`${descripcion} ${medida}`}
              sizes='100%'
              fill
              style={{
                objectFit: 'contain'
              }}
            />
          </div>
          <div className='col'>
            <h3 className='fw-bold mb-1' style={{ fontSize: '1rem' }}>{descripcion}</h3>
            <h4 style={{ fontSize: '0.95rem' }}>{`${display} ${medida}`}</h4>
            <p className='m-0 d-flex align-items-center justify-content-between' style={{ fontSize: '0.9rem' }}>
              {descuento > 0
                ? mndS === '$'
                  ? (
                    `Precio unitario: ${mndS} ${precioDesc}`
                    )
                  : (
                    `Precio unitario: ${mndS} ${precioDescBs}`
                    )
                : mndS === '$'
                  ? (
                    `Precio unitario: ${mndS} ${precio}`
                    )
                  : (
                    `Precio unitario: ${mndS} ${precioBs}`
                    )}
              {descuento > 0 && <span className='badge bg-secondary text-primary'>{`- ${descuento}%`}</span>}
            </p>
            <p className='m-0' style={{ fontSize: '0.9rem' }}>{`Sub-total: ${mndS} ${mndS === '$' ? subTotal : subTotalBs}`}</p>
          </div>
          <div id='item-lista-btns' className='col d-flex '>
            <div className='input-group input-group-sm m-auto' style={{ maxWidth: 'fit-content' }}>
              <button
                id='item-lista-btn'
                className='btn btn-sm btn-secondary text-primary'
                style={{ fontSize: '1.3rem', lineHeight: '.9rem' }}
                onClick={() => handleReduce(id, refCant.current)}
              >
                -
              </button>
              <input
                type='text'
                className='form-control form-control-sm text-center'
                style={{ width: '5ch', maxWidth: '40px' }}
                value={itemCant}
                readOnly
              />
              <button
                id='item-lista-btn'
                className='btn btn-sm btn-secondary text-primary'
                style={{ fontSize: '1rem', lineHeight: '.75rem' }}
                onClick={() => handleAdd(id, refCant.current)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
