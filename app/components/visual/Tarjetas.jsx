import { useContext } from "react";
import { Sesion } from "../../context/sesion";
import { productos } from "../../context/productos";

export const Tarjetas = () => {
  const { monedaActiva, divisas } = useContext(Sesion);

  let mndLocal = divisas[0];

  return (
    <div className="container text-center">
      <div className="row">
        {productos.map((prdct) => {
          return (
            <div
              id="tarjeta-producto"
              className="col bg-alter1 text-primary rounded m-1 px-2 py-1"
            >
              <img
                src={"/png/productos/" + prdct.id + ".png"}
                alt={
                  "Presentación " +
                  prdct.descrip +
                  " " +
                  prdct.peso +
                  prdct.undMedida
                }
              />
              <h6 className="fs-5 fw-bold mt-1 text-start">
                {prdct.descrip} {prdct.peso} {prdct.undMedida}
              </h6>
              <div id="cuerpo-tarjeta" className="d-flex align-items-center">
                <p className="text-start">
                  {monedaActiva.simbolo}{" "}
                  {monedaActiva.simbolo === "$"
                    ? prdct.precio
                    : prdct.precio * mndLocal.valorDolar}
                </p>
                <button className="btn btn-primary ms-auto">Agregar</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tarjetas;
