'use client'

import { useState } from 'react'

export default function Login () {
  // const [email, setEmail] = useState('')

  const [validEmail, setValidEmail] = useState('')

  const handleEmail = (e) => {
    const reg = /@*.com/
    const val = e.target.value

    if (!reg.test(val) && val.length > 25) {
      setValidEmail(false)
    } else {
      setValidEmail(true)
    }
  }

  // const handlePsswd = (e) => {
  //   // let reg = /!@#$%&.?+-/;
  //   const val = e.target.value

  //   if (reg.test(val)) {
  //     setValidEmail(true)
  //     console.log(val)
  //   } else {
  //     setValidEmail(false)
  //     console.log(validEmail)
  //   }
  // }

  return (
    <div id='login' className='container-fluid mt-3'>
      <div id='login-header' className='container text-center'>
        <i className='bi bi-person-circle display-3' />
        <h1 className='text-center'>Iniciar Sesión</h1>
      </div>
      <form id='login-form-container' className='p-2 m-auto shadow'>
        <div className='mb-3'>
          <label
            id='email-label-login'
            htmlFor='email-login'
            className='form-label ms-1'
          >
            Correo Electrónico
          </label>
          <input
            id='email-login'
            className='form-control'
            type='text'
            onChange={handleEmail}
          />
          {validEmail === false && (
            <span className='badge bg-secondary text-primary'>Error</span>
          )}
        </div>

        <div className='mb-3'>
          <label
            id='psswd-label-login'
            htmlFor='psswd-login'
            className='form-label ms-1'
          >
            Contraseña
          </label>
          <input id='psswd-login' className='form-control' type='text' />
          <span />
        </div>

        <button
          id='login-btn'
          className='btn btn-secondary m-auto'
          type='submit'
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
