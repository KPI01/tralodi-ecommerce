import '/styles/scss/main.scss'
import '/styles/css/main.css'
import Navbar from './components/Navbar'
export const metadata = {
  title: 'Tralodi',
  description: 'Página web comercial para Inversiones Tralodi'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head>
        <title>{metadata.title}</title>
        <meta title='description' content={metadata.description} />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </head>
      <body className='bg-primary text-secondary'>
        <header>
            <Navbar />
        </header>
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  )
}
