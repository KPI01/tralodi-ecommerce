import fs from 'fs'
import path from 'path'

export async function GET (request) {
  const { searchParams } = new URL(request.url)
  const params = Object.fromEntries(searchParams.entries())

  if (params.action === 'list_dir') {
    const relDir = params.relDir
    const fullDir = path.join('./public', relDir)
    const files = fs.readdirSync(fullDir)
    return Response.json(files)
  }
}
