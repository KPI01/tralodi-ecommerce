import Carousel from '../../visual/Carousel'
import getData from '../../../libs/getDir'

export default async function CarouselOfertas () {
  console.log('Dentro de CarouselOfertas')
  const imgs = []
  const dir = 'main_carousel'
  const data = await (await getData(dir))
  // Guardar nombres de imágenes en array
  data.map(item => {
    imgs.push(item.name)
    return true
  })
  return (
    <Carousel nombre='ofertas' contexto={imgs} dir={dir} />
  )
}
