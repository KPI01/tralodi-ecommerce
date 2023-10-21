import '../styles/scss/main.scss'
import '../styles/css/main.css'
import dynamic from 'next/dynamic'
import { App } from '../context/sesion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

dynamic(
  () => require('bootstrap/dist/js/bootstrap.min.js'),
  { ssr: false }
  )
  
export default function RootLayout ({ children }) {
  return (
    <App>
      <html lang='es'>
        <head>
          <title>Tralodi Distribución</title>
          <meta
            title='description'
            content='Página web comercial para Inversiones Tralodi'
          />
          <link rel='icon' href='/svg/favicon.svg' />
        </head>
        <body className='bg-primary text-secondary'>
          <header className='container-fluid mb-4 mb-lg-0'>
            <Navbar />
          </header>
          <main>
            <div className='container'>{children}</div>
          </main>
          <Footer />
        </body>
      </html>
    </App>
  )
}
