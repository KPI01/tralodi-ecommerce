import BsPersonCircle from "../svg/BsPersonCircle";

export default function LoginBtn() {
  return (
    <a href="/login">
    <button className="btn btn-primary text-alter1 d-flex align-items-center ms-auto" id="login-btn">
      <BsPersonCircle />
      Acceso
    </button>
    </a>
  );
}
