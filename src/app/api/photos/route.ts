import { NextResponse, type NextRequest } from 'next/server'

import { errorResponse } from '@/lib/api-response'
import { fetchPhotosByTab, isPhotoTab } from '@/lib/unsplash'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const tab = searchParams.get('tab')
  const page = Number(searchParams.get('page') ?? '1')

  if (!tab || !isPhotoTab(tab)) {
    return NextResponse.json({ errors: ['Invalid or missing tab'] }, { status: 400 })
  }

  if (isNaN(page) || page < 1) {
    return NextResponse.json({ errors: ['Invalid page number'] }, { status: 400 })
  }

  try {
    const result = await fetchPhotosByTab({ tab, page })
    return NextResponse.json(result)
  } catch (error) {
    return errorResponse(error)
  }
}
