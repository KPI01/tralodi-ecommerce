export default function Footer() {
  return (
    <footer className="container text-center">
      <div className="row">
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
            <button type="submit" className="btn btn-secondary">Enviar</button>
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
