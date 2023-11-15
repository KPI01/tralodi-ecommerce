'use client'
import { useContext, useState } from 'react'
import { Sesion } from '../../../context/Context'
import { v4 } from 'uuid'
import BriefItem from './BriefItem'

export default function Brief () {
  const { mnd, carrito, subTotal, total } = useContext(Sesion)
  const [context] = useState(carrito)
  const mndS = mnd.simb

  const subTotalBs = parseFloat((subTotal * 35).toFixed(2))
  const totalBs = parseFloat((total * 35).toFixed(2))

  return (
    <>
      <hr id='separador-movil' />
      <div id='carrito-resumen'>
        <h2 className='fw-bold'>Resumen</h2>
        <div>
          <div>
            <span className=''>Sub-Total: {`${mndS} ${mndS === '$' ? subTotal : subTotalBs}`}</span>
          </div>
          <div>
            <h3 className='mb-0 mt-2'>IVA</h3>
            <ul className='ps-1 mb-0'>
              {context.map(item => {
                return (
                  <BriefItem
                    key={v4()}
                    mnd={mndS}
                    id={item.id}
                    descripcion={item.descripcion}
                    display={item.display}
                    medida={item.medida}
                    precio={item.precio}
                    descuento={item.descuento}
                  />
                )
              })}
            </ul>
          </div>
          <h3 className='fw-bold mt-3'>
            Total: {`${mndS} ${mndS === '$' ? total : totalBs}`}
          </h3>
        </div>
        <button id='comprar-btn' className='btn btn-alter1 text-primary fs-3 fw-bold text-center w-100'>Comprar</button>
      </div>
    </>
  )
}
