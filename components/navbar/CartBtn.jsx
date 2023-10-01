"use client"
import { useContext } from "react";
import { Sesion } from "/context/sesion";

export default function CartBtn() {
  const { carrito, monedaActiva, divisas } = useContext(Sesion);
  let mndLocal = divisas[0];

  let total = carrito.reduce((total, producto) => {
    let ivaProducto = 0;
    if (producto.descuento === 0) {
      ivaProducto = producto.precio * producto.cant * 0.12;
      return (total += producto.precio * producto.cant + ivaProducto);
    } else {
      ivaProducto =
        producto.precio * producto.cant -
        producto.precio * producto.cant * (producto.descuento / 100);
      ivaProducto *= 0.12;
      return (total += producto.precio * producto.cant + ivaProducto);
    }
  }, 0);

  if (monedaActiva.simbolo === "Bs.") {
    total = (total * mndLocal.valorDolar).toFixed(2);
  }

  return (
    <a href="/cart">
      <button
        className="btn btn-secondary text-primary ms-auto mx-lg-auto"
        id="cart-btn"
      >
        <i id="cart-icon" className="bi bi-cart-fill"></i>
        {total > 0 ? [monedaActiva.simbolo, total].join(" ") : "Comprar"}
      </button>
    </a>
  );
}
