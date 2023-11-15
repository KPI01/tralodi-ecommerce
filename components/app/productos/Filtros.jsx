'use client'
import { useContext, useState, useRef } from 'react'
import { v4 } from 'uuid'
import { marcas } from '../../../context/AppContext'
import Accordion from '../../visual/Accordion'
import { Sesion } from '../../../context/Context'

export default function Filtros ({ ...funcs }) {
  // Uso de contexto
  const { mnd } = useContext(Sesion)
  const mndS = mnd.simb

  // Listado de marcas
  const bodyMarcas = (
    <>
      {marcas.map(item => {
        return (
          <div key={v4()} className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value={item.id}
              id={`checbox-marca-${item.id}`}
            />
            <label className='form-check-label' for={`checbox-marca-${item.id}`}>{item.label}</label>
          </div>
        )
      })}
    </>
  )

  // listado de categorías
  const bodyCategorias = (
    <>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value='Cereales'
          id='checkbox-categoria-cereales'
        />
        <label
          className='form-check-label'
          for='checkbox-categoria-cereales'
        >
          Cereales
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value='Infusiones'
          id='checkbox-categoria-infusiones'
        />
        <label
          className='form-check-label'
          for='checkbox-categoria-infusiones'
        >
          Infusiones
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value='Infusiones'
          id='checkbox-categoria-sazonadores'
        />
        <label
          className='form-check-label'
          for='checkbox-categoria-sazonadores'
        >
          Sazonadores
        </label>
      </div>
    </>
  )

  // Rango de precio
  const bodyPrecio = (
    <>
      <div class='input-group mb-3 w-auto'>
        <span class='input-group-text bg-primary text-alter1 border-primary'>{`Min. ${mndS}`}</span>
        <input type='text' class='form-control' aria-label='Dollar amount (with dot and two decimal places)' />
      </div>
      <div class='input-group'>
        <span class='input-group-text bg-primary text-alter1 border-primary'>{`Max. ${mndS}`}</span>
        <input type='text' class='form-control' aria-label='Dollar amount (with dot and two decimal places)' />
      </div>
    </>
  )

  // Rango descuento
  let valDescuento = useRef(0)
  const changeDescuento = (cant) => {
    valDescuento = cant++
  }
  const bodyDescuento = (
    <>
      <div className='d-flex flex-wrap'>
        <div className='d-flex align-items-center justify-content-between' style={{ flexBasis: '100%' }}>
          <label for='rangoDescuento' class='form-label'>0%</label>
          <label for='rangoDescuento' class='form-label'>100%</label>
        </div>
        <input
          type='range'
          className='form-range'
          id='rangoDescuento'
          defaultValue={valDescuento.current}
          onChange={e => changeDescuento(e.target.value)}
          style={{ flexBasis: '100%' }}
        />
      </div>
      <p className='text-center' style={{ flexBasis: '100%' }}>{`${valDescuento.current}`}</p>
    </>
  )

  // Objeto con información de filtros
  const [filtros, setFiltros] = useState([
    { header: 'Marca', body: bodyMarcas, active: true },
    { header: 'Categoría', body: bodyCategorias, active: false },
    { header: 'Precio', body: bodyPrecio, active: false },
    { header: 'Descuento', body: bodyDescuento, active: false }
  ])

  const handleActive = (toChange) => {
    const arr = [...filtros]
    arr.map(item => {
      if (item === toChange) item.active = !(item.active)
      return
    })
    setFiltros(arr)
  }

  return <Accordion name='productos-filtros' items={filtros} func={handleActive}/>
}
