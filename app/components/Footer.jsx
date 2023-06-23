import Link from "next/link";
import { links } from "../context/pages";

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div id="productos" className="col">
          <h3>Secciones</h3>
          <ul>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route} className="text-secondary text-decoration-none">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="contactanos" className="col">
          <h3 className="">Contáctanos</h3>
          <div id="whatsapp">
            <p>WhatsApp + Numero</p>
          </div>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
              />
            </div>
            <div className="mb-3">
              <input
                type="mail"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Enviar
            </button>
          </form>
        </div>
        <div id="redes" className="col">
          <h3 className="">Redes</h3>
          <div>Instagram</div>
          <div>Facebook</div>
        </div>
      </div>
      <hr />
      <small>Esta página esta siendo desarrollada por Jorge Ramírez</small>
    </footer>
  );
}
