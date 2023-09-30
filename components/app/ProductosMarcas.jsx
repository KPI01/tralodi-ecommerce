"use client";
import { useState } from "react";
import { marcas } from "/context/AppContext";
import NavPills from '/components/visual/NavPills';
import Tarjetas from '/components/visual/Tarjetas';


export default function ProductosMarcas({contexto_tarjetas}) {
  // Estado que permite identificar cual proveedor ha sido seleccionado
  // Hacer que esto sea un componente
  const [marcaAct, setMarcaAct] = useState(1);
  console.log(marcaAct);

  // Filtro en productos para mostrar los que son de la marca seleccionada
  let prdctsMarcaAct = contexto_tarjetas.filter(
    (prdct) => prdct.empresa == marcaAct
  );

  
  return (
    <>
      <NavPills contexto={marcas} index={marcaAct} callback={setMarcaAct} />
      <Tarjetas contexto={prdctsMarcaAct} descuento={undefined} />
    </>
  );
}
