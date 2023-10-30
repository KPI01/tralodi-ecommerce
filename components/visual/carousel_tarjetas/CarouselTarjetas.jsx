import WrapperTarjetas from './WrapperTarjetas'

export default function CarouselTarjetas ({ name, context }) {
  console.log('Dentro de CarouselTarjetas')

  // División del array en diversos arrays
  let contextSlice = []
  let contador = 0
  while (contador <= context.length) {
    const separador = 3
    contextSlice.push(context.slice(contador, contador + separador))
    contador += separador
  }
  // Por si existen arrays sin contenido
  contextSlice = contextSlice.filter(arr => arr.length > 0)

  return (
    <div id={`carousel-${name}`} className='carousel slide' data-bs-touch='true'>
      <div id={`inner-carousel_${name}`} className='carousel-inner py-3'>
        {contextSlice.map(arr => {
          return <WrapperTarjetas key={crypto.randomUUID()} context={arr} />
        })}
      </div>
      <button id={`control-prev-carousel_${name}`} type='button' data-bs-target={`#carousel-${name}`} data-bs-slide='prev'>
        <i id='control-prev-icon' className='bi bi-arrow-left-short text-primary fs-1' />
        <span className='visually-hidden'>Anterior</span>
      </button>
      <button id={`control-next-carousel_${name}`} type='button' data-bs-target={`#carousel-${name}`} data-bs-slide='next'>
        <i id='control-next-icon' className='bi bi-arrow-right-short text-primary fs-1' />
        <span className='visually-hidden'>Siguiente</span>
      </button>
    </div>
  )
}
