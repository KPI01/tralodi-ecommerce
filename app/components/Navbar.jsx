import Link from "next/link";
import { links } from "../context/pages";
import SearchBar from "./navbar/SearchBar";
import LoginBtn from "./navbar/LoginBtn";
import CartBtn from "./navbar/CartBtn";
import CurrencySelector from "./navbar/CurrencySelector";

export default function Navbar() {
  const nav_links = links.filter(links => links.route!="/main")
  return (
    <nav className="navbar navbar-expand-lg bg-primary mb-3" id="navbar">
      <div className="container-fluid">
        <a
          className="navbar-brand text-alter1 fs-2 fw-bold fst-italic me-5"
          id="branding"
          href="/main"
        >
          <img
            src="/png/isotipo250.png"
            alt="Logo Inversiones Tralodi"
            id="logo"
          />
          TRALODI
        </a>
        <button
          className="navbar-toggler my-4 mx-auto border-0 position-absolute top-0 end-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto" id="navbar-nav">
            {nav_links.map(({ label, route }) => (
              <li key={route} className="nav-item fs-4 align-self-end align-self-lg-center" id="nav-item">
                <Link
                  href={route}
                  className={
                    label == "Ofertas"
                      ? "nav-link d-flex align-items-center text-secondary"
                      : "nav-link text-secondary"
                  }
                  id="nav-link"
                >
                  {label == "Ofertas" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
          <div className="d-flex flex-column flex-lg-row gap-4 my-4">
          <CurrencySelector />
          <LoginBtn />
          <CartBtn />
          </div>
        </div>
      </div>
    </nav>
  );
}
