import Link from 'next/link'

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Ofertas',
    route: '/ofertas'
  }
]

export default function Navbar () {
  return (
    <div class='container'>
      <ul>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
