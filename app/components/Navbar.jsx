import Link from "next/link";
import SearchBar from "./navbar/SearchBar";
import LoginBtn from "./navbar/LoginBtn";
import CartBtn from "./navbar/CartBtn";

const links = [
  {
    label: "Ofertas",
    route: "/ofertas",
  },
  {
    label: "Productos",
    route: "/productos",
  },
  {
    label: "Marcas",
    route: "/marcas",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary mb-3" id="navbar">
      <div className="container-fluid">
        <a
          className="navbar-brand text-alter1 fs-1 fw-bold fst-italic"
          id="branding"
          href="/"
        >
          <img
            src="/png/isotipo250.png"
            alt="Logo Inversiones Tralodi"
            id="logo"
          />
          TRALODI
        </a>
        <ul className="navbar-nav" id="navbar-nav">
          {links.map(({ label, route }) => (
            <li key={route} className="nav-item" id="nav-item">
              <Link
                href={route}
                className={
                  label == "Ofertas"
                    ? "nav-link d-flex align-items-center text-secondary fs-3 "
                    : "nav-link text-secondary fs-3"
                }
                id="nav-link"
              >
                {label == "Ofertas" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-tags-fill me-2 mb-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                  </svg>
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <SearchBar />
        <LoginBtn />
        <CartBtn />
      </div>
    </nav>
  );
}
