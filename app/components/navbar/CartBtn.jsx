export default function CartBtn() {
  return (
    <a href="/">
      <button
        className="btn btn-secondary text-primary ms-auto mx-lg-auto"
        id="cart-btn"
      >
        <i id="cart-icon" className="bi bi-cart-fill"></i>
        Comprar
      </button>
    </a>
  );
}
