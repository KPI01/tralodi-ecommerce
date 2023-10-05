export default function Productos () {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3'>
          <h1>Categorías</h1>
          <div className='accordion' id='accordion'>
            <div className='accordion-item'>
              <div className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#item1'
                  aria-expanded='false'
                  aria-controls='#item1'
                >
                  Item 1
                </button>
              </div>
              <div
                className='accordion-collapse collapse'
                id='item1'
                data-bs-parent='#accordion'
              >
                <div className='accordion-body'>
                  Ejemplo
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-auto'>
          <h1>Productos</h1>
        </div>
      </div>
    </div>
  )
}
