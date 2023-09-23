import { useContext } from "react";
import { Sesion } from "../../context/sesion";

export const Tarjetas = ({ contexto, descuento }) => {
  const { monedaActiva, divisas } = useContext(Sesion);

  var mndLocal = divisas[0];

  if (descuento === true) {
    let prdctsDesc = contexto.filter((prdct) => prdct.descuento > 0);
    console.log("Con descuento");
    return (
      <div className="container text-center">
        <div className="row">
          {prdctsDesc.map((prdct) => {
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
                  {prdct.descrip + " " + prdct.peso + " " + prdct.undMedida}
                </h6>
                <div id="cuerpo-tarjeta" className="d-flex align-items-center">
                  <p className="text-start">
                    {monedaActiva.simbolo}{" "}
                    {monedaActiva.simbolo === "$"
                      ? prdct.precio - prdct.precio * (prdct.descuento / 100)
                      : prdct.precio * mndLocal.valorDolar -
                        prdct.precio *
                          mndLocal.valorDolar *
                          (prdct.descuento / 100)}
                    <span className="ms-3 badge text-primary bg-secondary">
                      -{prdct.descuento}%
                    </span>
                  </p>
                  <button className="btn btn-primary ms-auto">Agregar</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (descuento === false) {
    console.log("Sin descuento");
    let prdctsSinDesc = contexto.filter((prdct) => prdct.descuento === 0);
    return (
      <div className="container text-center">
        <div className="row">
          {prdctsSinDesc.map((prdct) => {
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
                  {prdct.descrip + " " + prdct.peso + " " + prdct.undMedida}
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
  } else {
    console.log("Otros");
    return (
      <div className="container text-center">
        <div className="row">
          {contexto.map((prdct) => {
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
                  {prdct.descrip + prdct.peso + prdct.undMedida}
                </h6>
                <div id="cuerpo-tarjeta" className="d-flex align-items-center">
                  <p className="text-start">
                    {monedaActiva.simbolo + " "}
                    {prdct.descuento > 0
                    ? monedaActiva.simbolo === "$"
                      ? prdct.precio - (prdct.precio * (prdct.descuento/100))
                      : (prdct.precio * mndLocal.valorDolar) - ((prdct.precio * mndLocal.valorDolar) * (prdct.descuento/100))
                    : monedaActiva.simbolo === "$"
                      ? prdct.precio
                      : prdct.precio * mndLocal.valorDolar}
                    {prdct.descuento > 0
                      ? <span className="ms-3 badge text-primary bg-secondary">-{prdct.descuento}%</span>
                      : ""}
                  </p>
                  <button className="btn btn-primary ms-auto">Agregar</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Tarjetas;