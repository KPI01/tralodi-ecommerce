import '../../../styles/css/components/custom/burbujas.css'

export default function Burbuja ({ src, alt, active }) {
  return (
    <div className={'burbuja' + (active ? ' active' : '')}>
      <img className='burbuja-img' src={src} alt={alt} />
    </div>
  )
}
