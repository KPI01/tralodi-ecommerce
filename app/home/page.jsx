"use client";
import { marcas } from "../context/marcas";
import Carousel from "../components/visual/Carousel";
import NavPills from "../components/visual/NavPills";
import Tarjetas from "../components/visual/Tarjetas";

export default function Home() {
  return (
    <div className="container-fluid">
      <Carousel />

      <div id="productos-ofertas" className="my-5 mx-auto">
        <h1 id="heading" className="display-5 fw-bold">
          Productos en Oferta
        </h1>
      </div>

      <div id="productos-destacados" className="my-5 mx-auto">
        <h1 id="heading" className="display-6 fw-bold">
          Productos Destacados
        </h1>
        <Tarjetas />
      </div>

      <div id="productos-marcas">
        <h1 id="heading" className="display-6 fw-bold">
          Nuestras Marcas Aliadas
        </h1>
        <NavPills context={marcas} />
      </div>
    </div>
  );
}
