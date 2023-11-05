'use client'
import { useRef, useState } from 'react'
import useCart from '../../../hooks/useCart'

export default function BriefItem ({ mnd, id, descripcion, medida, precio, descuento }) {
  const { getCantProd } = useCart()
  const refCant = useRef(getCantProd(id))
  const [cant] = useState(refCant.current)

  const itemDescuento = descuento / 100
  const descontado = precio * itemDescuento
  const iva = (precio - descontado) * 0.16
  const total = parseFloat((iva * refCant.current).toFixed(2))

  const totalBs = parseFloat((total * 35).toFixed(2))

  return (
    <li
      className='d-flex justify-content-between align-items-center'
      style={{ listStyle: 'none', fontSize: '0.85rem' }}
    >
      <span>
        {`${descripcion} ${medida} x ${cant}`}
      </span>
      <span>{`${mnd} ${mnd === '$' ? total : totalBs}`}</span>
    </li>
  )
}
