import { links } from '../context/AppContext'
// import SearchBar from './navbar/SearchBar'
import LoginBtn from './navbar/LoginBtn'
import CartBtn from './navbar/CartBtn'
import CambiarMoneda from './navbar/CambiarMoneda'

export default function Navbar () {
  const navLinks = links.filter(
    (link) =>
      link.route !== '/' && link.route !== '/cart' && link.route !== '/login'
  )

  return (
    <nav className='navbar navbar-expand-lg' id='navbar'>
      <div className='container-fluid align-items-center justify-content-center mb-2'>
        <a
          href='/'
          className='navbar-brand container'
          id='branding'
        >
          <div className='row'>
            <img
              src='/isotipo250.png'
              alt='Logo Inversiones Tralodi'
              id='logo'
              className='mt-2'
            />
            <div className='col p-0'>
              <h1 className='text-alter1 fs-2 fw-bold fst-italic m-0 pt-2'>TRALODI</h1>
            </div>
          </div>
        </a>
        <button
          className='navbar-toggler my-4 border-0 position-absolute end-0 top-0'
          id='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarToggler'
          aria-controls='navbarToggler'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='text-secondary'>
            <i id='menu-icon' className='bi bi-list' />
          </span>
        </button>
        <div className='collapse navbar-collapse' id='navbarToggler'>
          <ul
            className='navbar-nav mx-4 d-flex flex-column flex-lg-row align-items-end align-items-lg-center justify-content-center'
            id='navbar-nav'
          >
            {navLinks.map(({ label, route }) => (
              <li
                key={route}
                className='nav-item fs-5'
                id='navbar-item'
              >
                <a
                  href={route}
                  id='navbar-link'
                  className={
                    label === 'Ofertas'
                      ? 'nav-link text-secondary d-flex align-items-center'
                      : 'nav-link text-secondary'
                  }
                >
                  {label === 'Ofertas' && (
                    <i id='tags-icon' className='bi bi-tags-fill' />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className='d-flex flex-column justify-content-end align-items-end w-100 gap-2 flex-lg-row align-items-lg-center '
            id='btn-group'
          >
            {/* <SearchBar /> */}
            <CambiarMoneda />
            <LoginBtn />
            <CartBtn />
          </div>
        </div>
      </div>
    </nav>
  )
}
