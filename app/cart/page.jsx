"use client";
import { useContext } from "react";
import { Sesion } from "../context/sesion";
import { productos } from "../context/productos";

export default function Cart() {
  // Utilizar el carrito del contexto
  const { carrito, monedaActiva, divisas, dispatch } = useContext(Sesion);

  // Variable para obtener el valor del dolas en bolivares
  var mndLocal = divisas[0];

  // Generando subtotal sin iva
  let subTotal = carrito.reduce((total, producto) => {
    return (total += producto.precio * producto.cant);
  }, 0);
  console.log("El subtotal del carrito es: ", subTotal);

  // Generando el total del carrrito
  let total = carrito
    .reduce((total, producto) => {
      let ivaProducto = 0;
      if (producto.descuento < 1) {
        ivaProducto = producto.precio * producto.cant * 0.12;
        return (total += producto.precio * producto.cant + ivaProducto);
      } else {
        ivaProducto =
          producto.precio * producto.cant -
          producto.precio * producto.cant * (producto.descuento / 100) * 0.12;
        return (total += producto.precio * producto.cant + ivaProducto);
      }
    }, 0)
    .toFixed(2);
  console.log("El total del carrito es: ", total);

  // Comprobacion que el carrito tenga mas de un producto
  if (carrito.length < 1) {
    return (
      <div id="container-carrito-vacio">
        <div
          id="alert-carrito-vacio"
          className="alert alert-secondary p-4 mx-auto"
        >
          <h4 className="mx-4 fs-2">
            El carrito está vacío. Ve a agregar productos!
          </h4>
        </div>
      </div>
    );
  } else {
    // Validando que los productos del carrito tengan más de una unidad y el producto esté activo
    let carritoValid = carrito.filter(
      (producto) => producto.cant > 0 && producto.estado === "Activo"
    );
    return (
      <div id="container-carrito" className="container my-4">
        <div className="row">
          <div className="col-8">
            <h2 className="m-0 display-6 fw-bold">Tu carrito</h2>
            <div
              id="container-detalles-carrito"
              className="bg-alter1 text-primary rounded p-3 h-100"
            >
              <ul id="detalles-carrito" className="list-group list-group-flush">
                {carritoValid.map((producto) => {
                  return (
                    <li
                      id="detalles-producto"
                      className="list-group-item text-primary container"
                    >
                      <div className="row">
                        <div
                          id="producto-carrito-img"
                          className="col d-flex justify-content-center"
                        >
                          <img src={"/png/productos/" + producto.id + ".png"} />
                        </div>
                        <div className="col text-primary d-flex align-item-center">
                          <div class="ms-2 me-auto my-auto">
                            <div class="fw-bold">
                              {producto.descripcion + " " + producto.medida}
                            </div>
                            <strong className="fs-6">Precio unit. : </strong>{" "}
                            {monedaActiva.simbolo}
                            {monedaActiva.simbolo === "$"
                              ? producto.precio
                              : producto.precio * mndLocal.valorDolar}{" "}
                            <br />
                            <strong>Sub-total: </strong> {monedaActiva.simbolo}
                            {producto.precio * producto.cant}
                          </div>
                        </div>
                        <div className="col text-primary d-flex align-items-center justify-content-center">
                          <div class="ms-2 me-auto d-flex flex-column ms-auto">
                            <div>
                              <strong>Cantidad: </strong>
                              {"  "}
                              {producto.cant}
                            </div>
                            <div className="btn-group">
                              <button
                                id="carrito-producto-btn"
                                className="btn btn-secondary border-1 border-start-0 border-top-0 border-bottom-0 border-primary"
                              >
                                -
                              </button>
                              <button
                                id="carrito-producto-btn"
                                className="btn btn-secondary border-1 border-end-0 border-top-0 border-bottom-0 border-primary"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-4">
            <h2 className="m-0 display-6 fw-bold">Resumen</h2>
            <div
              className="bg-alter1 text-primary rounded p-3 h-100"
              style={{ "--bs-bg-opacity": 0.9 }}
            >
              <h3 id="resumen-subtotal" className="fs-5">
                <strong>Sub-total: </strong>
                {monedaActiva.simbolo}
                {monedaActiva.simbolo === "$"
                  ? subTotal
                  : subTotal * mndLocal.valorDolar}
              </h3>
              <hr />
              <h4 className="m-0 fw-bold fs-6">IVA</h4>
              <ul id="resumen-iva-lista" className="ps-0">
                {carritoValid.map((producto) => {
                  return (
                    <li
                      id="resumen-iva-producto"
                      className="d-flex justify-content-between"
                    >
                      <div>
                        {producto.descripcion} {producto.medida}
                      </div>
                      <div>
                        {monedaActiva.simbolo}
                        {producto.descuento < 1
                          ? monedaActiva.simbolo === "$"
                            ? producto.precio * producto.cant * 0.12
                            : producto.precio *
                              mndLocal.valorDolar *
                              producto.cant *
                              0.12
                          : monedaActiva.simbolo === "$"
                          ? producto.precio -
                            producto.precio *
                              (producto.descuento / 100) *
                              producto.cant *
                              0.12
                          : (
                              (producto.precio * mndLocal.valorDolar -
                                producto.precio *
                                  mndLocal.valorDolar *
                                  (producto.descuento / 100)) *
                              producto.cant *
                              0.12
                            ).toFixed(2)}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <hr />
              <h3 className="fs-4">
                <strong>Total: </strong>
                {monedaActiva.simbolo}
                {monedaActiva.simbolo === "$"
                  ? total
                  : total * mndLocal.valorDolar}
              </h3>
              <div className="w-100 d-flex justify-content-center mt-3">
                <button id="carrito-resumen-btn-comprar" className="btn btn-secondary text-primary fw-bold rounded-pill px-3 py-2">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
