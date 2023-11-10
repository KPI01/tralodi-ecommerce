import Carousel from '../../visual/Carousel'
import getData from '../../../libs/getDir'

export default async function Banner ({ dir, id }) {
  console.log('Dentro de BannerOfertas')
  const imgs = []
  const data = await (await getData(dir))
  // Guardar nombres de imágenes en array
  data.map(item => {
    imgs.push(item.name)
    return true
  })
  return (
    <Carousel nombre={id} contexto={imgs} dir={dir} />
  )
}
