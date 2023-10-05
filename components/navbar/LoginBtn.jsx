export default function LoginBtn () {
  return (
    <a href='/login'>
      <button
        className='btn shadow-none btn-primary text-secondary w-100'
        id='login-btn'
      >
        <i id='user-icon' className='bi bi-person-fill' />
        Acceso
      </button>
    </a>
  )
}
