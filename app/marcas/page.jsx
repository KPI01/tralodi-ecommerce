import 'bootstrap-icons/font/bootstrap-icons.css'
import { marcas, productos } from '../../context/AppContext'
import ContainerTarjetas from '../../components/visual/tarjetas/ContainerTarjetas'

export default function Marcas () {
  return (
    <div className='container-fluid'>
      <div id='marcas-title' className='row'>
        <div className='col'>
          <h2 className=' fw-bold'>Marcas Aliadas</h2>
        </div>
      </div>
      <div id='marcas-productos' className='row'>
        <div className='col'>
          <ContainerTarjetas contexto={productos.filter(item => item.descuento && item.estado === 'Activo')} />
        </div>
      </div>
    </div>

  )
}
