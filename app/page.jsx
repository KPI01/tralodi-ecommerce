import 'bootstrap-icons/font/bootstrap-icons.css'
import { productos } from '../context/AppContext'
import CarouselMain from '../components/app/CarouselMain'
import Tarjetas from '../components/visual/Tarjetas'
import ProductosMarcas from '../components/app/ProductosMarcas'


export default function Home () {
  // Filtro en productos para detectar cuales están activos
  const productosAct = productos.filter(
    (producto) => producto.estado === 'Activo'
  )

  return (
    <div id='container-home' className='container-fluid'>

      <CarouselMain />

      <div id='productos-ofertas' className='my-5 mx-auto'>
        <h1 id='heading' className='display-5 fw-bold'>
          Productos en Oferta
        </h1>
        <Tarjetas contexto={productosAct.filter(producto => producto.descuento > 0)} />
      </div>

      <div id='productos-destacados' className='my-5 mx-auto'>
        <h1 id='heading' className='display-6 fw-bold'>
          Productos Destacados
        </h1>
        <Tarjetas contexto={productosAct.filter(producto => producto.descuento === 0)} />
      </div>

      <div id='productos-marcas'>
        <h1 id='heading' className='display-6 fw-bold'>
          Nuestras Marcas Aliadas
        </h1>
        <ProductosMarcas contextoTarjetas={productosAct} />
      </div>
    </div>
  )
}
