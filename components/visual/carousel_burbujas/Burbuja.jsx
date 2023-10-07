export default function Burbuja ({ src, alt, active }) {
  return (
    <button type='button' className={'burbuja' + (active ? ' active' : '')}>
      <img className='burbuja-img' src={src} alt={alt} />
    </button>
  )
}
