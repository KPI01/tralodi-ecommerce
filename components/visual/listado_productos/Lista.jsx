import ItemLista from './ItemLista'

export default function Lista ({ context }) {
  console.log('Dentro de Lista')

  if (context.length >= 1) {
    return (
      <ul id='lista-carrito' className='list-group list-group-flush'>
        {context.map(item => {
          return (
            <ItemLista
              key={item.id}
              id={item.id}
              descripcion={item.descripcion}
              medida={item.medida}
              display={item.display}
              precio={item.precio}
              descuento={item.descuento}
            />
          )
        })}
      </ul>
    )
  }
}
