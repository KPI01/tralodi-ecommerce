import BsCartFill from "../svg/BsCartFill";

export default function CartBtn() {
  return (
    <button className="btn btn-secondary text-primary d-flex align-items-center ms-auto" id="cart-btn">
      <BsCartFill />
    </button>
  );
}
