import { headers } from 'next/headers'

export default async function getData (action, dir) {
  // const host = process?.env.NODE_ENV === 'development' ? headers().get('host') : process?.env.REACT_APP_URL
  // const protocol = process?.env.NODE_ENV === 'development' ? 'http' : 'https'
  let isLocalhost = typeof window === undefined ? true : false
  const deployURL = process.env.REACT_APP_URL
  

  const siteURL = isLocalhost ? `http://${headers().get('host')}/` : deployURL

  const response = await fetch(`${siteURL}/api/public?action=${action}&relDir=${dir}`)
  return response.json()
}
