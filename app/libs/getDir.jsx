// import { headers } from 'next/headers'

export default async function getData (action, dir) {
  // const host = headers().get('host')

  const response = await fetch(`/api/public?action=${action}&relDir=${dir}`, {method:'GET'})
  return response.json()
}
