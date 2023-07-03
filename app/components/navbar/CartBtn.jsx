import BsCartFill from "../svg/BsCartFill";

export default function CartBtn() {
  return (
    <a href="/cart">
    <button className="btn btn-secondary text-primary ms-auto mx-lg-auto" id="cart-btn">
      <BsCartFill />
      Comprar
    </button>
    </a>
  );
}
