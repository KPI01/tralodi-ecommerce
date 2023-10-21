import Image from "next/image"

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
      <Image className='burbuja-img' src={src} alt={alt} fill/>
    </button>
  )
}
