import Tarjeta from './Tarjeta'
import { v4 } from 'uuid'

export default function ContainerTarjetas ({ contexto }) {
  return (
    <div className='container-fluid'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
        {contexto.map(item => {
          return (
            <div key={v4()} className='col'>
              <Tarjeta
                id={item.id}
                descripcion={item.descripcion}
                medida={item.medida}
                display={item.presentacion}
                precio={item.precio}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
