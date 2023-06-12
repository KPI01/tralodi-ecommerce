import Link from "next/link";
import SearchBar from './navbar/SearchBar';

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Ofertas",
    route: "/ofertas",
  },
  {
    label: "Marcas",
    route: "/marcas",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary mb-3">
      <div className="container-fluid">
        <div className="navbar navbar-brand text-alter1 text-uppercase fw-bold fst-italic fs-1">
          <img src="/favicon.png" alt="Logo Tralodi" className="logo d-inline-block align-text-top"/>Tralodi
        </div>
        <ul className="navbar-nav">
          {links.map(({ label, route }) => (
            <li key={route} className="nav-item">
              <Link href={route} className="nav-link text-secondary text-capitilize fs-3">{label}</Link>
            </li>
          ))}
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
}
