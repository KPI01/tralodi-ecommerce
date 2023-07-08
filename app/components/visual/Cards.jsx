export default function Cards({ context, isOferta }) {
  if (isOferta) {
    let products = context.filter((product) => product.descuento > 0);

    return (
      <div className="row">
        {products.map(({ id, descripcion, precio, descuento }) => (
          <div className="col-auto">
            <div className="card">
              <img
                id="product-card-img"
                className="card-img-top"
                src={"/png/products/" + id + ".png"}
                alt={"Imagen del producto " + id}
              />
              <div className="card-body mx-2">
                <div className="card-title">{descripcion}</div>
                <div className="card-text">
                  {precio - (descuento / 100) * precio} - {descuento}% + IVA
                </div>
                <button className="btn btn-primary btn-sm">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    let products = context.filter((product) => product.descuento === 0);

    return <h1>No es oferta</h1>;
  }
}
