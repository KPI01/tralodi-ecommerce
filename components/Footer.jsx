export default function Footer () {
  return (
    <footer className='container mt-5'>
      <div className='row'>
        <div id='servicio-cliente' className='col'>
          <h5>Servicio al cliente</h5>
          <ul id='footer-nav'>
            <li>¿Cómo comprar?</li>
          </ul>
        </div>
        <div id='contacto' className='col'>
          <h5>Contáctanos</h5>
          <a
            href='https://api.whatsapp.com/send?phone=584149477069&text=Hola%2C%20en%20qu%C3%A9%20podemos%20ayudarle.%20%E2%9C%A8'
            target='_blank'
            className='link-secondary link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover' rel='noreferrer'
          >
            <h6>WhatsApp</h6>
          </a>
          <a
            href='https://www.instagram.com/tralodi.ve/'
            target='_blank'
            className='link-secondary link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover' rel='noreferrer'
          >
            <h6>Instagram</h6>
          </a>
        </div>
        <div id='productos' className='col'>
          <h5>Navegación</h5>
          <ul id='footer-nav' />
        </div>
      </div>
      <hr />
      <small>Esta página esta siendo desarrollada por Jorge Ramírez</small>
    </footer>
  )
}
