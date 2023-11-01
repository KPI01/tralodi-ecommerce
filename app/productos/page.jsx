import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../styles/css/_productos.css'
import { productos } from '../../context/AppContext'
import Filtros from '../../components/app/productos/Filtros'
import ContainerTarjetas from '../../components/visual/tarjetas/ContainerTarjetas'

export default function Productos () {
  console.log('Dentro de Productos')

  // Filtrando productos activos
  const productosAct = productos.filter(item => item.estado === 'Activo' && item.descuento)

  return (
    <div id='container-seccion_productos' className='container-fluid m-0'>
      <h2 id='productos-title' className='fw-bold'>Productos</h2>
      <div id='container-productos' className='container-fluid'>
        <div className='row'>
          <div id='productos-filtros' className='col-3'>
            <Filtros />
          </div>
          <div id='productos-tarjetas' className='col'>

            <ContainerTarjetas contexto={productosAct} />
          </div>
        </div>
      </div>
    </div>
  )
}
