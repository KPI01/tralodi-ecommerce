import Burbuja from './Burbuja'

export default function WrappperBurbujas ({ contexto, activa, callback }) {
  console.log('Dentro del wrapper - ', contexto)
  return (
    <div className='wrapper-burbujas'>
      {contexto.map(marca => {
        marca.id === activa && console.log(marca.label)
        const act = activa === marca.id
        return <Burbuja key={marca.id} src={'/png/marcas/' + marca.id + '.png'} alt={marca.label} active={act} onClick={() => callback(marca.id)} />
      })}
    </div>
  )
}
