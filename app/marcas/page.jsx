import { marcas } from '../../context/AppContext'

export default function Marcas () {
  return (
    <div className='container-fluid'>
      <h1 className='display-5 fw-bold'>Marcas Aliadas</h1>
      {marcas.map(({ id, label }) => (
        <div key={id}>
          <h2 className='display-6'>{label}</h2>
          <hr />
        </div>
      ))}
    </div>
  )
}
