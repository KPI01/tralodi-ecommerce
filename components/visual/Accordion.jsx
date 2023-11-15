import { v4 } from 'uuid'

export default function Accordion ({ name, items, func }) {
  console.log('Dentro de Accordion')

  const handleActive = (toChange) => {
    func(toChange)
  }

  return (
    <div id={`accordion-${name}`} className='accordion'>
      {items.map(item => {
        return (
          <div 
            key={v4()}
            className='accordion-item'
            onClick={() => handleActive(item)}
          >
            <h3 className='accordion-header'>
              <button
                className='accordion-button collapsed text-primary fw-bold'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#accordion-item-${items.indexOf(item)}`}
                aria-expanded={item.active}
                aria-controls={`accordion-item-${items.indexOf(item)}`}
              >
                {item.header}
              </button>
            </h3>
            <div id={`accordion-item-${items.indexOf(item)}`} className={'accordion-collapse collapse' + (item.active ? ' show':' collapsed')}>
              <div className='accordion-body'>
                {item.body}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
