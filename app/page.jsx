"use client";
import { useContext, useState } from "react";
import { marcas } from "/context/marcas";
import { productos } from "/context/productos";
import { Sesion } from "/context/sesion";
import Carousel from "/components/visual/Carousel";
import NavPills from "/components/visual/NavPills";
import Tarjetas from "/components/visual/Tarjetas";

export default function Home() {
  const { dispatch } = useContext(Sesion);
  // Estado que permite identificar cual proveedor ha sido seleccionado
  // Hacer que esto sea un componente
  const [marcaAct, setMarcaAct] = useState(1);
  console.log(marcaAct);

  // Filtro en productos para detectar cuales están activos
  let productosAct = productos.filter(
    (producto) => producto.estado === "Activo"
  );
  // Filtro en productos para mostrar los que son de la marca seleccionada
  let prdctsMarcaAct = productosAct.filter(
    (prdct) => prdct.empresa == marcaAct
  );

  const addProductoToCarrito = (id) => {
    dispatch({
      type: "ADD_TO_CARRITO",
      payload: {id: id, cant: 1}
    });
  };

  return (
    <div className="container-fluid">
      <Carousel />

      <div id="productos-ofertas" className="my-5 mx-auto">
        <h1 id="heading" className="display-5 fw-bold">
          Productos en Oferta
        </h1>
        <Tarjetas contexto={productosAct} descuento={true} />
      </div>

      <div id="productos-destacados" className="my-5 mx-auto">
        <h1 id="heading" className="display-6 fw-bold">
          Productos Destacados
        </h1>
        <Tarjetas contexto={productosAct} descuento={false} />
      </div>

      <div id="productos-marcas">
        <h1 id="heading" className="display-6 fw-bold">
          Nuestras Marcas Aliadas
        </h1>
        <NavPills contexto={marcas} index={marcaAct} callback={setMarcaAct} />
        <Tarjetas contexto={prdctsMarcaAct} descuento={undefined} />
      </div>
    </div>
  );
}
