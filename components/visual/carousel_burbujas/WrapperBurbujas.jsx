import Burbuja from './Burbuja'

export default function WrapperBurbujas ({ contexto, activa, callback }) {
  console.log('Dentro de WrapperBurbujas')
  const handleMarcaSelection = (id) => {
    console.log('Marca seleccionada: ', id)
    callback(id)
  }

  return (
    <div className='wrapper-burbujas'>
      {contexto.map(marca => {
        marca.id === activa && console.log('Marca activa: ', marca.label)
        const act = activa === marca.id
        return <Burbuja key={marca.id} src={'/marcas/' + marca.id + '.png'} alt={marca.label} active={act} callback={handleMarcaSelection} marcaId={marca.id} />
      })}
    </div>
  )
}
