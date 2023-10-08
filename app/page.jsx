import { productos } from '../context/AppContext'
import Carousel from '../components/visual/Carousel'
import Tarjetas from '../components/visual/Tarjetas'
import ProductosMarcas from '../components/app/ProductosMarcas'

export default function Home () {
  // Filtro en productos para detectar cuales están activos
  const productosAct = productos.filter(
    (producto) => producto.estado === 'Activo'
  )

  return (
    <div className='container-fluid'>
      <Carousel />

      <div id='productos-ofertas' className='my-5 mx-auto'>
        <h1 id='heading' className='display-5 fw-bold'>
          Productos en Oferta
        </h1>
        <Tarjetas contexto={productosAct} descuento />
      </div>

      <div id='productos-destacados' className='my-5 mx-auto'>
        <h1 id='heading' className='display-6 fw-bold'>
          Productos Destacados
        </h1>
        <Tarjetas contexto={productosAct} descuento={false} />
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
