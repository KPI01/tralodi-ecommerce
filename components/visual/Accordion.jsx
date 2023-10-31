import { v4 as uuidv4 } from 'uuid'

export default function Accordion ({ name, items, current, chgCurrent }) {
  console.log('Dentro de Accordion')

  const handleOpen = (id) => {
    if (current === id) {
      chgCurrent(-1)
    }
    chgCurrent(id)
  }

  return (
    <div id={`accordion-${name}`} className='accordion'>
      {items.map(item => {
        return (
          <div key={uuidv4()} className='accordion-item'>
            <h3 className='accordion-header'>
            <button
              className='accordion-button collapsed text-primary fw-bold'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#accordion-item-${items.indexOf(item)}`}
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              {item.header}
            </button>
            </h3>
            <div id={`accordion-item-${items.indexOf(item)}`} className='accordion-collapse collapse'>
              <div className="accordion-body">
                {item.body}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
