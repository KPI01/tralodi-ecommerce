import '../../../styles/css/components/custom/carousel.css'
import Wrapper from './Wrapper'

export default function CarouselTarjetas ({ contexto }) {
  return (
    <div className='carousel slide'>
      <div className='carousel-inner'>
        {contexto.map(arr => {
          return <Wrapper key={contexto.indexOf(arr)} contexto={arr} />
        })}
      </div>
    </div>
  )
}
