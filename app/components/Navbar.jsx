import Link from "next/link";
import { links } from "../context/links";
import SearchBar from "./navbar/SearchBar";
import LoginBtn from "./navbar/LoginBtn";
import CartBtn from "./navbar/CartBtn";
import CurrencySelector from "./navbar/CurrencySelector";
import BsList from "./svg/BsList";
import BsTagsFill from "./svg/BsTagsFill";

export default function Navbar() {
  const nav_links = links.filter(link => link.route!="/main" && link.route!="/cart" && link.route!="/login")
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
            <BsList />
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
                    <BsTagsFill />
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
