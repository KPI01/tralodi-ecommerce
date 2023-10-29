import Link from "next/link";

export default function Footer () {
  return (
    <footer id='footer' className='container-fluid'>
      <div id='footer-container' className='row'>
        <div id='footer-cliente' className='col-auto ms-4 ms-lg-5 me-lg-5'>
          <h6 className='footer-section-title'>Servicio al cliente</h6>
          <ul id='footer-servicios-cliente' className='footer-section-list'>
            <li id='footer-servicio-cliente' className='footer-section-item'>
              <Link href={'#'} id='footer-servicio-cliente-link' className='footer-section-link'>Preguntas frecuentes</Link>
            </li>
            <li id='footer-servicio-cliente' className='footer-section-item'>
              <Link href={'#'} id='footer-servicio-cliente-link' className='footer-section-link'>¿Cómo comprar?</Link>
            </li>
            <li id='footer-servicio-cliente' className='footer-section-item'>
              <Link href={'#'} id='footer-servicio-cliente-link' className='footer-section-link'>Políticas de Privacidad</Link>
            </li>
            <li id='footer-servicio-cliente' className='footer-section-item'>
              <Link href={'#'} id='footer-servicio-cliente-link' className='footer-section-link'>Términos y Condiciones</Link>
            </li>
          </ul>
        </div>
        <div id='footer-contacto' className='col-auto'>
          <h6 className='footer-section-title'>Contacto</h6>
          <ul id='footer-contactos' className='footer-section-list'>
            <li id='footer-contacto-medio' className='footer-section-item'>
              <Link href={'mailto: tralodi@gmail.com'} id='footer-contacto-link' className='footer-section-link'>Email</Link>
            </li>
            <li id='footer-contacto-medio' className='footer-section-item'>
              <Link href={'tel: 02432153909'} id='footer-contacto-link' className='footer-section-link'>Teléfono</Link>
            </li>
            <li id='footer-contacto-medio' className='footer-section-item'>
              <Link href={'https://wa.link/8h1iob'} id='footer-contacto-link' className='footer-section-link' target='_blank'>WhatsApp</Link>
            </li>
          </ul>
        </div>
        {/* <div id='footer-nosotros' className='col-2'>
          <h6 className='fw-bold'>Nosotros</h6>
        </div> */}
        <div id='footer-marca' className='col-auto container-fluid me-5'>
          <div id='footer-marca-branding' className='row'>
            <div id='footer-marca-container' className='col'>
              <h5 
                id='footer-main-title'
                className='text-alter1 display-6 fw-bold fst-italic text-center'
              >
                <span id='footer-maintitle-main'>TRALODI</span>
                <br />
                <span id='footer-maintitle-secondary' className='text-alter2 fst-normal fs-2'>es distribución!</span>
              </h5>
            </div>
          </div>
          <div id='footer-marca-social' className='row'>
            <div className='col'>
              <Link href={'https://www.instagram.com/tralodi.ve/'} className='text-secondary d-flex justify-content-center' target='_blank'>
                <i id='footer-icon' className='bi bi-instagram fs-3 text-alter1' />
              </Link>
            </div>
            <div className='col'>
              <Link href={'https://wa.link/8h1iob'} className='text-secondary d-flex justify-content-center' target='_blank'>
                <i id='footer-icon' className='bi bi-whatsapp px-4 fs-3 text-alter1' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
