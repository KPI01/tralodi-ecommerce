import { productos } from "../context/productos";
import { marcas } from "../context/marcas";
import Carousel from "../components/visual/Carousel";
import Cards from "../components/visual/Cards";
import NavPills from "../components/visual/NavPills";

export default function Home() {
  return (
    <div className="container-fluid">
      <Carousel />

      <div id="productos-ofertas" className="my-5 mx-auto">
        <h1 id="heading" className="display-5 fw-bold">
          Productos en Oferta
        </h1>
        <Cards context={productos} type={"producto"} isOferta={true} />
      </div>

      <div id="productos-destacados" className="my-5 mx-auto">
        <h1 id="heading" className="display-6 fw-bold">
          Productos Destacados
        </h1>
        <Cards context={productos} type={"producto"} />
      </div>

      <div id="productos-marcas">
        <h1 id="heading" className="display-6 fw-bold">
          Nuestras Marcas Aliadas
        </h1>
      <NavPills context={marcas}/>
      </div>
    </div>
  );
}
