import BsCartFill from "../svg/BsCartFill";

export default function CartBtn() {
  return (
    <a href="/cart">
    <button className="btn btn-secondary text-primary d-flex align-items-center ms-auto" id="cart-btn">
      <BsCartFill />
    </button>
    </a>
  );
}
