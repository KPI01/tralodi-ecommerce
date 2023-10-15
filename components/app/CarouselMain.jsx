import Carousel from '../visual/Carousel'
import getData from '../../app/libs/getDir'

export default async function CarouselMain () {
  const dir = 'main_carousel'
  const data = await (await getData('list_dir', dir))
  console.log('CarouselMain: ', data, typeof data)

  return (
    <Carousel nombre='principal' contexto={data} dir={dir} />
  )
}
