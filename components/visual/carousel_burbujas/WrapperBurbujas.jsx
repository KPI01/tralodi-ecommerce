import Burbuja from './Burbuja'

export default function WrappperBurbujas ({ contexto, activa, callback }) {
  const handleMarcaSelection = (id) => {
    console.log('Llamando funcion desde wrapper de busbuja')
    console.log('Marca clicada: ', id)
    callback(id)
  } 
  
  return (
    <div className='mb-4 wrapper-burbujas'>
      {contexto.map(marca => {
        marca.id === activa && console.log(marca.label)
        const act = activa === marca.id
        return <Burbuja key={marca.id} src={'/png/marcas/' + marca.id + '.png'} alt={marca.label} active={act} callback={handleMarcaSelection} marcaId={marca.id} />
      })}
    </div>
  )
}
