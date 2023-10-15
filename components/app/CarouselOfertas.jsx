import Carousel from '../visual/Carousel'
import getData from '../../app/libs/getDir'

export default async function CarouselOfertas () {
  const dir = 'ofertas_carousel'
  const data = await (await getData('list_dir', dir))
  console.log('CarouselOfertas: ', data, typeof data)

  return (
    <Carousel nombre='principal' contexto={data} dir={dir} />
  )
}
