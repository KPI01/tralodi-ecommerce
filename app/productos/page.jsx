import 'bootstrap-icons/font/bootstrap-icons.css'
import { v4 } from 'uuid'
import { productos } from '../../context/AppContext'
import Filtros from '../../components/app/productos/Filtros'
import Tarjeta from '../../components/visual/tarjetas/Tarjeta'

export default function Productos () {
  console.log('Dentro de Productos')

  // Filtrando productos activos
  const productosAct = productos.filter(item => item.estado === 'Activo' && item.descuento)

  return (
    <div className='m-0 p-0'>
      <h2 className='fw-bold'>Productos</h2>
      <div className='container-fluid w-100'>
        <div className='row row-cols-2 w-100 g-3'>
          <div id='container-filtros' className='col col-lg-3 '>
            <Filtros />
          </div>
          <div className='col col-lg-9 m-0'>
            <div className='container-fluid m-0 p-0' style={{ width: '100%' }}>
              <div className='row w-100 row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4 px-auto'>
                {productosAct.map(item => {
                  return (
                    <div key={v4()} className='col'>
                      <Tarjeta
                        id={item.id}
                        empresa={item.empresa}
                        marca={item.marca}
                        descripcion={item.descripcion}
                        medida={item.medida}
                        display={item.display}
                        categoria={item.categoria}
                        precio={item.precio}
                        descuento={item.descuento}
                        estado={item.estado}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
