export default function Carousel ({ nombre, contexto, dir }) {
  return (
    <div id={'carousel-' + nombre} className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        {contexto.map(img => {
          return (
            <div key={contexto.indexOf(img)} className={'carousel-item' + (contexto.indexOf(img) === 0 ? ' active' : '')} data-bs-interval='5000'>
              <img src={`/${dir}/${img}`} alt={img} className='d-block w-100' />
            </div>
          )
        })}
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target={'#carousel-' + nombre} data-bs-slide='prev'>
        <i id='control-prev-icon' className='bi bi-arrow-left-short text-primary fs-1 d-flex' />
        <span className='visually-hidden'>Atrás</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target={'#carousel-' + nombre} data-bs-slide='next'>
        <i id='control-next-icon' className='bi bi-arrow-right-short text-primary fs-1 d-flex' />
        <span className='visually-hidden'>Siguiente</span>
      </button>
    </div>
  )
}
