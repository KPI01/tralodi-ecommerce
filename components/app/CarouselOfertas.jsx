import Carousel from '../visual/Carousel'
import getData from '../../app/libs/getDir'

export default async function CarouselOfertas () {
  const imgs = []
  const dir = 'ofertas_carousel'
  const data = await (await getData(dir))
  // Guardar nombres de imágenes en array
  data.map(item => {
    imgs.push(item.name)
    return true
  })
  console.log('CarouselOfertas: ', imgs, typeof imgs)
  return (
    <Carousel nombre='principal' contexto={data} dir={dir} />
  )
}
