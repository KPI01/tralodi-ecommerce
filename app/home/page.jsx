"use client";
import { useState } from "react";
import { marcas } from "../context/marcas";
import { productos } from "../context/productos";
import Carousel from "../components/visual/Carousel";
import NavPills from "../components/visual/NavPills";
import Tarjetas from "../components/visual/Tarjetas";

export default function Home() {
  const [marcaAct, setMarcaAct] = useState(1);
  console.log(marcaAct);

  let prdctsMarcaAct = productos.filter(prdct => prdct.empresa == marcaAct)
  
  return (
    <div className="container-fluid">
      <Carousel />

      <div id="productos-ofertas" className="my-5 mx-auto">
        <h1 id="heading" className="display-5 fw-bold">
          Productos en Oferta
        </h1>
        <Tarjetas contexto={productos} descuento={true} />
      </div>

      <div id="productos-destacados" className="my-5 mx-auto">
        <h1 id="heading" className="display-6 fw-bold">
          Productos Destacados
        </h1>
        <Tarjetas contexto={productos} descuento={false} />
      </div>

      <div id="productos-marcas">
        <h1 id="heading" className="display-6 fw-bold">
          Nuestras Marcas Aliadas
        </h1>
        <NavPills contexto={marcas} index={marcaAct} callback={setMarcaAct}/>
        <Tarjetas contexto={prdctsMarcaAct} descuento={undefined}/>
      </div>
    </div>
  );
}
