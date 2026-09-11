import { NextResponse } from 'next/server'

import { UnsplashError } from '@/lib/errors'

export function errorResponse(error: unknown): NextResponse {
  if (error instanceof UnsplashError) {
    return NextResponse.json({ errors: error.errors }, { status: error.status })
  }

  console.error('Unhandled API error', error)
  return NextResponse.json({ errors: ['Internal Server Error'] }, { status: 500 })
}
