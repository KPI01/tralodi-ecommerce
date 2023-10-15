import { GITHUB_API } from './GITHUB_API_KEY'

export default async function getData (dir) {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${GITHUB_API}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }

  // fetch a mi propia cuenta de github para obtener las imágenes
  const res = await fetch(`https://api.github.com/repos/KPI01/web-tralodi-ecommerce/contents/public/${dir}`, options)

  return res.json()
}
