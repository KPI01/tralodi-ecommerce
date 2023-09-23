// import { cart } from "../context/cart";

export default function Cart() {
  let subTotal = 0;
  cart.map(({ precio, cnt }) => {
    subTotal += precio * cnt;
  });

  let iva = 0;
  cart.map(({ precio, cnt }) => {
    iva += precio * cnt * 0.16;
  });

  let total = subTotal + iva;


  return (
    <div className="container-fluid mt-3">
      <h1>Tu Carrito</h1>
      <div className="container mt-1">
        <div className="row">
          <div id="cart-detail" className="col-9 container">
            <hr className="border-4" />
            {/* {cart.map(({ id, descripcion, medida, precio, cnt }) => (
              <div className="row container producto" key={id}>
                <div className="header-producto">
                  <h5 className="display-6 fs-3 fw-bold">
                    {descripcion} {medida}
                  </h5>
                </div>
                <div className="body-producto container">
                  <div className="row container">
                    <div className="row">
                      <div
                        id="cart-product-img-container"
                        className="col-auto bg-alter1 shadow rounded"
                      >
                        <img
                          id="cart-product-img"
                          src={"/png/products/" + id + ".png"}
                          alt={"Imagen " + descripcion}
                        />
                      </div>
                      <div id="producto-info" className="col container pt-4">
                        <div id="header-info-product" className="row">
                          <div className="col text-center fw-bold fs-6">
                            Cantidad
                          </div>
                          <div className="col text-center fw-bold fs-6">
                            Precio Unitario
                          </div>
                          <div className="col text-center fw-bold fs-6">
                            Total
                          </div>
                        </div>
                        <div className="row">
                          <div id="stepper" className="col text-center input-group input-group-sm d-flex justify-content-center mt-1 ps-3">
                            <button className="btn btn-secondary" onClick={e => addCnt(e.target.value)}>-</button>
                            <input id="cart-cnt-field" className="bg-primary border border-secondary text-center text-alter1 fw-bold" value={cnt} />
                            <button className="btn btn-secondary">+</button>
                          </div>
                          <div className="col text-center">{precio}</div>
                          <div className="col text-center">{precio * cnt}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-2 my-4" />
              </div>
            ))} */}
          </div>
          <div
            id="cart-brief"
            className="col container d-flex justify-content-center"
          >
            <div
              id="brief-box"
              className="row container bg-alter1 text-primary rounded p-2 m-auto shadow"
            >
              <h5 className="fw-bold">Resumen del pedido:</h5>
              <div className="brief-body container">
                <div className="row">
                  <div className="col" id="brief-headers">
                    <div className="row text-center">Sub-Total:</div>
                    <div className="row text-center">IVA (16%):</div>
                    <div className="row text-center fw-bold">Total:</div>
                  </div>
                  <div className="col" id="brief-body">
                    <div className="row">{subTotal}</div>
                    <div className="row">{iva.toFixed(2)}</div>
                    <div className="row ">{total}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
