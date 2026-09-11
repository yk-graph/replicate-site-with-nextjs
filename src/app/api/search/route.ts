import { NextResponse, type NextRequest } from 'next/server'

import { errorResponse } from '@/lib/api-response'
import { searchPhotos } from '@/lib/unsplash'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const query = searchParams.get('query')?.trim()
  const page = Number(searchParams.get('page') ?? '1')

  if (!query) {
    return NextResponse.json({ errors: ['Invalid or missing query'] }, { status: 400 })
  }

  if (isNaN(page) || page < 1) {
    return NextResponse.json({ errors: ['Invalid page number'] }, { status: 400 })
  }

  try {
    const result = await searchPhotos({ query, page })
    return NextResponse.json(result)
  } catch (error) {
    return errorResponse(error)
  }
}
