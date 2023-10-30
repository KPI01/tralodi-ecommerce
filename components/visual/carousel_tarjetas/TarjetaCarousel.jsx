import { useContext } from 'react'
import Image from 'next/image'
import { Sesion } from '../../../context/Context'
import { useCart } from '../../../hooks/useCart'

export default function TarjetaCarousel ({ id, descripcion, medida, precio, descuento }) {
  const { mnd, carrito } = useContext(Sesion)
  const { addProductoToCarrito, redProductoFromCarrito, getCantProducto } = useCart()

  const precioBs = precio * 35
  const cantCarrito = getCantProducto(id)

  return (
    <div id='tarjeta-carousel-producto' className='tarjeta-producto'>
      <div
        id='producto-img-container'
        style={{
          position: 'relative',
          height: '100%',
          minHeight: '250px'
        }}
      >
        <Image
          id='producto-img'
          className='m-auto'
          src={'/productos/' + id + '.png'}
          alt={`Imagen ${descripcion} ${medida}`}
          fill
          sizes='100%'
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
      <div id='producto-descripcion' className='fw-bold fs-5'>
        {descripcion} {medida}
      </div>
      <div id='producto-precio' className='d-flex justify-content-between align-items-center'>
        {mnd.simb} {mnd.simb === '$' ? precio : precioBs} + IVA
        {descuento > 0 && <span id='badge-descuento' className='badge bg-secondary text-primary'> -{descuento}%</span>}
      </div>
      <div id='producto-actions' className='d-flex justify-content-between'>
        {!(carrito.find(item => item.id === id)) &&
          <button
            id='tarjeta-btn-add'
            className='btn btn-secondary text-primary ms-auto'
            onClick={() => addProductoToCarrito(id, 1)}
          >
            Agregar
          </button>}
        {carrito.find(item => item.id === id) &&
          <div id='tarjeta-input-group' className='input-group ms-auto'>
            <button
              id='tarjeta-red-cant'
              className='btn btn-secondary border-0'
              onClick={() => redProductoFromCarrito(id, 1)}
            >
              -
            </button>
            <input
              id='tarjeta-cant-field'
              className='form-control bg-transparent border-0 text-center'
              type='text'
              disabled
              defaultValue={cantCarrito}
            />
            <button
              id='tarjeta-sum-cant'
              className='btn btn-secondary border-0'
              onClick={() => addProductoToCarrito(id, 1)}
            >+
            </button>
          </div>}
      </div>
    </div>
  )
}
