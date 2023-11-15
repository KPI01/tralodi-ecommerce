'use client'
import Image from 'next/image'
import { useContext, useRef, useState } from 'react'
import { Sesion } from '../../../context/Context'
import useCart from '../../../hooks/useCart'
import Toast from '../toast/Toast'

export default function Tarjeta ({ id, empresa, marca, descripcion, medida, display, categoria, precio, descuento, estado }) {
  console.log('Dentro de Tarjeta de ', id)
  const { mnd, dispatch } = useContext(Sesion)
  const { getCantProd, isProdInCarrito } = useCart()
  const refCant = useRef(getCantProd(id))
  const [itemCant, setItemCant] = useState(refCant.current)
  const inCarrito = isProdInCarrito(id)
  const [toastCant, setToastCant] = useState(0)
  const [toastActive, setToastActive] = useState(false)

  const desc = descuento / 100
  const descontado = precio - (precio * desc)
  const iva = descontado * 0.16
  const total = parseFloat((descontado + iva).toFixed(2))
  const totalBs = parseFloat((total * 35).toFixed(2))

  const handleReduce = (actCant) => {
    let newVal = actCant - 1
    if (newVal < 0) newVal = 0
    console.log(`${id} | Valor anterior: ${actCant} | Nuevo valor: ${newVal}`)
    refCant.current = newVal
    setItemCant(newVal)
  }

  const handleAdd = (actCant) => {
    const newVal = actCant + 1
    console.log(`${id} | Valor anterior: ${actCant} | Nuevo valor: ${newVal}`)
    refCant.current = newVal
    setItemCant(newVal)
  }

  const addProd = (itemId, itemEmpr, itemMar, itemDescr, itemDisp, itemMed, itemCat, itemCant, itemPre, itemEst, itemDescu) => {
    dispatch({
      type: 'ADD_PROD_CARRITO',
      payload: {
        id: itemId,
        empresa: itemEmpr,
        marca: itemMar,
        descripcion: itemDescr,
        display: itemDisp,
        medida: itemMed,
        categoria: itemCat,
        cant: itemCant,
        precio: itemPre,
        estado: itemEst,
        descuento: itemDescu
      }
    })
  }

  const setCantProd = (item, itemCant) => {
    dispatch({
      type: 'SET_PROD_CANT',
      payload: {
        id: item,
        cant: itemCant
      }
    })
  }

  const handleAgregar = () => {
    setToastCant(itemCant)
    if (inCarrito) {
      setCantProd(id, itemCant)
    } else {
      addProd(
        id, empresa, marca, descripcion, display, medida, categoria, itemCant, precio, estado, descuento
      )
    }
    setToastActive(true)
    setTimeout(() => { setToastActive(false) }, 3000)
  }

  return (
    <>
      <div
        className='card m-auto'
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
          <h5 className='card-title fw-bold' style={{ fontSize: '.9rem' }}>{descripcion}</h5>
          <h6 className='card-subtitle mb-1' style={{ fontSize: '.85rem' }}>{`${display} ${medida}`}</h6>
          <p className='card-text mb-2 d-flex justify-content-between align-items-center' style={{ fontSize: '0.9rem' }}>
            {`${mnd.simb} ${mnd.simb === '$' ? total : totalBs} + IVA`}
            {descuento > 0 && <span className='badge bg-secondary text-primary fw-bold'>{`- ${descuento}%`}</span>}
          </p>
          <div id='card-actions' className='d-flex justify-content-between'>
            <button type='button' className='btn btn-sm btn-secondary text-primary' onClick={() => handleAgregar()}>
              Agregar
            </button>
            <div className='input-group input-group-sm' style={{ maxWidth: 'fit-content' }}>
              <button
                className='btn btn-sm btn-secondary text-primary'
                style={{
                  fontSize: '1.3rem',
                  lineHeight: '.9rem'
                }}
                onClick={() => handleReduce(refCant.current)}
              >-
              </button>
              <input
                type='text'
                className='form-control form-control-sm text-center'
                style={{
                  width: '5ch',
                  maxWidth: '40px'
                }}
                value={refCant.current}
                readOnly
                disabled={refCant.current === 0}
              />
              <button className='btn btn-sm btn-secondary text-primary' style={{ fontSize: '1rem', lineHeight: '.75rem' }} onClick={() => handleAdd(refCant.current)}>+</button>
            </div>
          </div>
        </div>
      </div>
      <Toast cant={toastCant} item={`${descripcion} ${display} ${medida}`} show={toastActive} />
    </>
  )
}
