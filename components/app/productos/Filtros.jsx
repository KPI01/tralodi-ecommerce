import Accordion from '../../visual/Accordion'

export default function Filtros () {
  // Objeto con información de filtros
  const filtros = [
    { header: 'Filtro1', body: 'Contenido filtro 1' },
    { header: 'Filtro2', body: 'Contenido filtro 2' },
    { header: 'Filtro3', body: 'Contenido filtro 3' },
    { header: 'Filtro4', body: 'Contenido filtro 4' },
    { header: 'Filtro5', body: 'Contenido filtro 5' }
  ]

  return <Accordion name='productos-filtros' items={filtros} />
}
