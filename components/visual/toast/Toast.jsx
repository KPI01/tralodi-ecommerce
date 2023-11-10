export default function Toast ({ cant, item, show }) {
  return (
    <div
      className='toast align-items-center w-auto border-alter2 px-3'
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
      style={{
        display: 'block',
        position: 'fixed',
        right: '10px',
        bottom: '10px',
        opacity: show ? '100%' : '0%',
        transition: '0.5s',
        zIndex: '9999'
      }}
    >
      <div className='d-flex justify-content-evenly align-items-center'>
        <i className='bi bi-bell-fill text-primary' />
        <div className='toast-body text-primary'>
          Has agregado
          <span className='fw-bold'>
            {` ${cant} `}
          </span>
          de
          <span className='fw-bold' style={{ fontSize: '0.75rem' }}>
            {` ${item} `}
          </span>
          al carrito!
        </div>
      </div>
    </div>
  )
}
