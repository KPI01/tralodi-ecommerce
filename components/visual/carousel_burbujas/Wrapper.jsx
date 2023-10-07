import Burbuja from './Burbuja'

export default function Wrapper ({ contexto }) {
  return (
    <div className='carrousel-item d-flex'>
      {contexto.map(marca => {
        return <Burbuja key={marca.id} src={'/png/marcas/' + marca.id + '.png'} alt={marca.label} />
      })}
    </div>
  )
}
