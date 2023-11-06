'use client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from "react"
import { marcas, productos } from '../../context/AppContext'
import ProductosMarcas from '../../components/app/marcas/ProductosMarcas'
import ContainerTarjetas from '../../components/visual/tarjetas/ContainerTarjetas'


export default function Marcas () {
  const [current, setCurrent] = useState(1)

  return (
    <div className='container-fluid'>
      <div id='marcas-title' className='row'>
        <div className='col'>
          <h2 className=' fw-bold'>Marcas Aliadas</h2>
        </div>
      </div>
      <div id='marcas-productos' className='row'>
        <div className='col'>
          <ProductosMarcas context={marcas} state={current} func={setCurrent} />
        </div>
        <div className='col'>
          <ContainerTarjetas contexto={productos.filter(item => item.empresa === current)} />
        </div>
      </div>
    </div>

  )
}
