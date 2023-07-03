import BsPersonCircle from "../svg/BsPersonCircle";

export default function LoginBtn() {
  return (
    <a href="/login">
    <button className="btn shadow-none btn-primary text-secondary w-100" id="login-btn">
      <BsPersonCircle />
      Acceso
    </button>
    </a>
  );
}
