// import { headers } from 'next/headers'

export default async function getData (action, dir) {
  const host = headers().get('host')
  const protocol = process?.env.NODE_ENV === 'development' ? 'http' : 'https'

  const response = await fetch(`${protocol}://${host}/api/public?action=${action}&relDir=${dir}`)
  return response.json()
}
