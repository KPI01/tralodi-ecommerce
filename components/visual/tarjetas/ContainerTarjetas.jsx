import Tarjeta from './Tarjeta'
import { v4 } from 'uuid'

export default function ContainerTarjetas ({ contexto }) {
  return (
    <div className='container-fluid'>
      <div className='row row-cols-auto g-3'>
        {contexto.map(item => {
          return (
            <div key={v4()} className='col'>
              <Tarjeta
                id={item.id}
                empresa={item.empresa}
                marca={item.marca}
                descripcion={item.descripcion}
                medida={item.medida}
                display={item.display}
                categoria={item.categoria}
                precio={item.precio}
                descuento={item.descuento}
                estado={item.estado}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
