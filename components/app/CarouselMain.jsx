import Carousel from '../visual/Carousel'

export default async function CarouselMain () {
  const dir = 'main_carousel'
  const data = ['banner-main.png']
  console.log('CarouselMain: ', data, typeof data)

  return (
    <Carousel nombre='principal' contexto={data} dir={dir} />
  )
}
