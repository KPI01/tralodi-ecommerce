"use client";
import { useContext } from "react";
import { Sesion } from "/context/sesion";

export default function CartBtn() {
  const { monedaActiva, divisas, total } = useContext(Sesion);
  let mndLocal = divisas[0].valorDolar;

  return (
    <a href="/cart">
      <button
        className="btn btn-secondary text-primary ms-auto mx-lg-auto"
        id="cart-btn"
      >
        <i id="cart-icon" className="bi bi-cart-fill"></i>
        {monedaActiva.simbolo === "$"
          ? [monedaActiva.simbolo, total.toFixed(2)].join(" ")
          : [
              monedaActiva.simbolo,
              (total * mndLocal).toFixed(2),
            ].join(" ")}
      </button>
    </a>
  );
}
