import Carousel from '../../components/visual/Carousel'

export default function Ofertas () {
  return (
    <div className='container-fluid'>
      <h1 className='display-5 fw-bold'>Ofertas</h1>

      <Carousel />

      <div id='productos'>
        <h2 className='display-6 fw-bold'>Productos</h2>
      </div>
    </div>
  )
}
