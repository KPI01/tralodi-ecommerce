import Carousel from '../../visual/Carousel'
import getData from '../../../libs/getDir'

export async function CarouselMain () {
  console.log('Dentro de CarouselMain')
  const imgs = []
  const dir = 'main_carousel'
  const data = await (await getData(dir))

  // Guardar nombres de imágenes en array
  data.map(item => {
    imgs.push(item.name)
    return true
  })

  return (
    <Carousel nombre='principal' contexto={imgs} dir={dir} />
  )
}

export async function CarouselAlter () {
  console.log('Dentro de CarouselAlter')
  const imgs = []
  const dir = 'main_carousel'
  const data = await (await getData(dir))

  // Guardar nombres de imágenes en array
  data.map(item => {
    imgs.push(item.name)
    return true
  })

  return (
    <Carousel nombre='alternativo' contexto={imgs} dir={dir} />
  )
}
