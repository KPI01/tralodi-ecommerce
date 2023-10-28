export async function getTasaDolar () {
  const url = 'https://pydolarvenezuela-api.vercel.app/api/v1/dollar/page?page=bcv'
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const res = await fetch(url, options)

  return res.json()
}
