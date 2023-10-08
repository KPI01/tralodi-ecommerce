export default function Burbuja ({ src, alt, active, callback, marcaId }) {
  const handleMarcaClick = (id) => {
    console.log('Llamando funcion desde burbuja')
    callback(id)
  }

  return (
    <button
      type='button'
      className={'burbuja' + (active ? ' active' : '')}
      onClick={() => handleMarcaClick(marcaId)}
    >
      <img className='burbuja-img' src={src} alt={alt} />
    </button>
  )
}
