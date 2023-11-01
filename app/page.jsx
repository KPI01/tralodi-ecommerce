import 'bootstrap-icons/font/bootstrap-icons.css'
import { marcas, productos } from '../context/AppContext'
import { CarouselMain, CarouselAlter } from '../components/app/home/Carousels'
import ProductosMarcas from '../components/app/home/ProductosMarcas'
import ContainerTarjetas from '../components/visual/tarjetas/ContainerTarjetas'

export default function Home () {
  console.log('Dentro de Home')
  // Filtro en productos para detectar cuales están activos
  const productosAct = productos.filter(
    (producto) => producto.estado === 'Activo'
  )

  const idNestle = marcas.find(item => item.label.includes('Nestlé'))

  return (
    <div id='container-home' className='container-fluid'>

      <CarouselMain />

      <div id='seccion-ofertas' className='my-5 mx-auto'>
        <h2 id='ofertas-title' className='fw-bold'>
          Productos en Oferta
        </h2>
        <ContainerTarjetas contexto={productosAct.filter(producto => producto.descuento > 0)} />
      </div>

      <div id='seccion-destacados' className='my-5 mx-auto'>
        <h2 id='destacados-titulos' className='fw-bold'>
          Productos Destacados
        </h2>
        <ContainerTarjetas contexto={productosAct.filter(producto => producto.descuento === 0)} />
      </div>

      <div id='seccion-marcas' className='my-5'>
        <h2 id='marcas-titulo' className='fw-bold'>
          Nuestras Marcas Aliadas
        </h2>
        <ProductosMarcas contextoTarjetas={productosAct} />
      </div>

      <CarouselAlter />

      <div id='seccion-nestle' className='my-5 mx-auto'>
        <h3 id='nestle-titulo' className='display-5 fw-bold'>Destacados de Nestlé</h3>
        <ContainerTarjetas contexto={productosAct.filter(item => item.empresa === idNestle.id)} />
      </div>
    </div>
  )
}
