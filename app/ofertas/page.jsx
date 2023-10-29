import 'bootstrap-icons/font/bootstrap-icons.css'
import CarouselOfertas from '../../components/app/ofertas/CarouselOfertas'
import Tarjetas from '../../components/visual/Tarjetas'
import { productos } from '../../context/AppContext'

export default function Ofertas () {

  const productosAct = productos.filter(item => item.estado === 'Activo')

  return (
    <div className='container-fluid'>
      <h2 className='display-4 fw-bold'>Ofertas</h2>

      <CarouselOfertas />

      <div id='seccion-productos' className='mt-5'>
        <h3 className='display-5 fw-bold'>Productos</h3>
        <Tarjetas contexto={productosAct.filter(producto => producto.descuento > 0)} />
      </div>
    </div>
  )
}
