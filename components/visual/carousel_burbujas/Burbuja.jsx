import Image from 'next/image'

export default function Burbuja ({ src, alt, active, callback, marcaId }) {
  const handleMarcaClick = (id) => {
    callback(id)
  }

  return (
    <button
      type='button'
      className={'burbuja' + (active ? ' active' : '')}
      onClick={() => handleMarcaClick(marcaId)}
      style={{
        position: 'relative',
        height: '100%',
        minHeight: '150px',
        minWidth: '150px',
        padding: '1rem'
      }}
    >
      <Image
        className='burbuja-img'
        src={src}
        alt={alt}
        fill
        sizes='100%'
        style={{
          objectFit: 'contain',
          padding: '1rem'
        }}
      />
    </button>
  )
}
