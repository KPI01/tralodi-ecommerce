import { productos } from "../context/productos";
import Cards from "../components/pages/Cards";
import Carousel from "../components/pages/Carousel";

export default function Ofertas () {
  return (
    <div className="container-fluid">
      <h1 className="display-2 fw-bold">Ofertas</h1>

      <Carousel />

      <div id="productos">
        <h2 className="display-4 fw-bold">Productos</h2>
        <Cards context={productos} type={'producto'} isOferta={true} />
      </div>
    </div>
  )
}
