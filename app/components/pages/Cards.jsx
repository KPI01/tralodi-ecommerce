export default function Cards({ context, type, isOferta }) {
  if (type == "producto") {
    if (isOferta) {
      const products = context.filter((product) => product.discount > 0);

      return (
        <div
          id="productos-ofertas"
          class="container-fluid d-flex flex-wrap gap-4"
        >
          {products.map(({ id, label, price, discount }) => (
            <div className="card bg-alter1 text-primary border-0" product={id}>
              <img src="/productos/producto1.png" alt={label} />
              <div className="card-body text-left">
                <h5 className="card-title">{label}</h5>
                <p className="card-text text-break">
                  $ {price - price * (discount / 100)}
                  <small> con IVA y descuento del %{discount}!</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      const products = context.filter((product) => product.discount == 0);

      return (
        <div
          id="productos-destacados"
          class="container-fluid d-flex flex-wrap gap-4"
        >
          {products.map(({ id, label, price }) => (
            <div className="card bg-alter1 text-primary border-0" product={id}>
              <img src="/productos/producto1.png" alt={label} />
              <div className="card-body text-left">
                <h5 className="card-title">{label}</h5>
                <p className="card-text text-break">
                  $ {price}
                  <small>con IVA</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  } else if (type == "marcas") {
    return (
      <ul class="nav nav-underline">
        {context.map(({ id, label }) => (
          <li id="li-nav-item" class="nav-item">
            <a id="a-nav-link" key={id} class={id==1 ? "nav-link active" : "nav-link"} aria-current="page">
              {label}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
