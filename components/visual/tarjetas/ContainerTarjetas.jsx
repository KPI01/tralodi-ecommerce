import Tarjeta from './Tarjeta'
import { v4 } from 'uuid'

export default function ContainerTarjetas ({ contexto }) {
  return (
    <div className='container-fluid m-0' style={{ width: '100%' }}>
      <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 px-auto' style={{ width: '100%' }}>
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
