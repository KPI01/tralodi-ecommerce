import TarjetaCarousel from './TarjetaCarousel'

export default function WrapperTarjetas ({ context }) {
  console.log('Dentro de WrapperTarjetas')

  return (
    <div className='wrapper-tarjetas'>
      {context.map(item => {
        return <TarjetaCarousel key={item.id} id={item.id} descripcion={item.descripcion} medida={item.medida} precio={item.precio} descuento={item.descuento} />
      })}
    </div>
  )
}
