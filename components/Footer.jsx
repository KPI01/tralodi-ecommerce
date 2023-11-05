import Link from 'next/link'

export default function Footer () {
  return (
    <footer id='footer' className='container'>
      <div className='row'>
        <div id='footer-nav' className='col-auto me-4'>
          <h6 className='footer-section-title'>Navegación</h6>
          <ul className='footer-section-list'>
            <li className='footer-section-item'>
              <Link href='/' className='footer-section-link'>Inicio</Link>
            </li>
            <li className='footer-section-item'>
              <Link href='/ofertas' className='footer-section-link'>Ofertas</Link>
            </li>
            <li className='footer-section-item'>
              <Link href='/productos' className='footer-section-link'>Productos</Link>
            </li>
            <li className='footer-section-item'>
              <Link href='/marcas' className='footer-section-link'>Marcas</Link>
            </li>
            <li className='footer-section-item'>
              <Link href='/cart' className='footer-section-link'>Tu carrito</Link>
            </li>
          </ul>
        </div>
        <div id='footer-cliente' className='col-auto me-4'>
          <h6 className='footer-section-title'>Servicio al cliente</h6>
          <ul className='footer-section-list'>
            <li className='footer-section-item'>
              <Link href='#' className='footer-section-link'>Preguntas frecuentes</Link>
            </li>
            <li className='footer-section-item'>
              <Link href='#' className='footer-section-link'>¿Cómo comprar?</Link>
            </li>
            <li className='footer-section-item'>
              <Link href='#' className='footer-section-link'>Políticas de Privacidad</Link>
            </li>
            <li className='footer-section-item'>
              <Link href='#' className='footer-section-link'>Términos y Condiciones</Link>
            </li>
          </ul>
        </div>
        <div id='footer-contacto' className='col-auto me-4'>
          <h6 className='footer-section-title'>Contacto</h6>
          <ul className='footer-section-list'>
            <li className='footer-section-item'>
              <Link href='mailto: tralodi@gmail.com' className='footer-section-link'>Email</Link>
            </li>
            <li className='footer-section-item'>
              <Link href='tel: 02432153909' className='footer-section-link'>Teléfono</Link>
            </li>
            <li className='footer-section-item'>
              <Link href='https://wa.link/8h1iob' className='footer-section-link' target='_blank' rel='noreferrer'>WhatsApp</Link>
            </li>
          </ul>
        </div>
        {/* <div id='footer-nosotros' className='col-2'>
          <h6 className='fw-bold'>Nosotros</h6>
        </div> */}
        <div id='footer-marca' className='col-auto container-fluid me-5'>
          <div className='row'>
            <div className='col'>
              <h5
                className='text-alter1 display-6 fw-bold fst-italic text-center'
              >
                <span id='footer-maintitle-main'>TRALODI</span>
                <br />
                <span id='footer-maintitle-secondary' className='text-alter2 fst-normal fs-2'>es distribución!</span>
              </h5>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Link href='https://www.instagram.com/tralodi.ve/' className='text-secondary d-flex justify-content-center' target='_blank' rel='noreferrer'>
                <i id='footer-icon' className='bi bi-instagram fs-3 text-alter1' />
              </Link>
            </div>
            <div className='col'>
              <Link href='https://wa.link/8h1iob' className='text-secondary d-flex justify-content-center' target='_blank' rel='noreferrer'>
                <i id='footer-icon' className='bi bi-whatsapp px-4 fs-3 text-alter1' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
