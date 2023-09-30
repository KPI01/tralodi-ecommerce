import { links } from "/context/links";
import SearchBar from "./navbar/SearchBar";
import LoginBtn from "./navbar/LoginBtn";
import CartBtn from "./navbar/CartBtn";
import CambiarMoneda from "./navbar/CambiarMoneda";
import Link from "next/link";

export default function Navbar() {
  const nav_links = links.filter(
    (link) =>
      link.route != "/" && link.route != "/cart" && link.route != "/login"
  );

  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container-fluid align-items-center">
        <a
          href="/"
          className="navbar-brand text-alter1 fs-3 fw-bold fst-italic"
          id="branding"
        >
          <img
            src="/png/isotipo250.png"
            alt="Logo Inversiones Tralodi"
            id="logo"
          />
          TRALODI
        </a>
        <button
          className="navbar-toggler my-4 border-0 position-absolute end-0 top-0"
          id="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-secondary">
            <i id="menu-icon" className="bi bi-list"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mx-3" id="navbar-nav">
            {nav_links.map(({ label, route }) => (
              <li key={route} className="nav-item fs-5" id="navbar-item">
                <a
                  href={route}
                  id="navbar-link"
                  className={
                    label == "Ofertas"
                      ? "nav-link d-flex align-items-center text-secondary"
                      : "nav-link text-secondary"
                  }
                >
                  {label == "Ofertas" && (
                    <i id="tags-icon" className="bi bi-tags-fill"></i>
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <SearchBar style="d-none d-lg-flex align-items-center justify-content-end text-alter1 my-md-3 mx-auto" />
          <div className="d-flex flex-column flex-lg-row gap-3" id="btn-group">
            <CambiarMoneda />
            <LoginBtn />
            <CartBtn />
            <SearchBar style="d-flex d-lg-none align-items-center text-alter1 ms-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
}
