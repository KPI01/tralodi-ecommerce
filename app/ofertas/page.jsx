import 'bootstrap-icons/font/bootstrap-icons.css'
import Banner from '../../components/app/ofertas/Banner'
import { productos } from '../../context/AppContext'
import ContainerTarjetas from '../../components/visual/tarjetas/ContainerTarjetas'

export default function Ofertas () {
  const productosAct = productos.filter(item => item.estado === 'Activo')

  return (
    <div className='container-fluid'>
      <h2 className='fw-bold'>Ofertas</h2>

      <Banner dir='ofertas_carousel1' id='ofertas-banner1' />

      <div id='seccion-productos' className='mt-5'>
        <h3 className='fw-bold'>Productos</h3>
        <ContainerTarjetas contexto={productosAct.filter(producto => producto.descuento > 0)} />
      </div>
    </div>
  )
}
