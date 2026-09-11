import type { UnsplashPhoto, UnsplashSearchResponse } from '@/types/photo'
import type { PhotoTab } from './photo-tabs'
import { UnsplashError } from './errors'

export { PHOTO_TABS, isPhotoTab } from './photo-tabs'
export type { PhotoTab }

const BASE_URL = 'https://api.unsplash.com'
const PER_PAGE = 30

function getAccessKey(): string {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY

  if (!accessKey) {
    throw new Error('Missing Unsplash access key. Please set the UNSPLASH_ACCESS_KEY environment variable.')
  }

  return accessKey
}

async function unsplashFetch(path: string): Promise<Response> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Client-ID ${getAccessKey()}`,
      'Accept-Version': 'v1',
    },
  })

  if (!res.ok) {
    const body = await res.json().catch(() => null)
    const errors = Array.isArray(body?.errors) ? (body.errors as string[]) : []
    throw new UnsplashError(res.status, errors)
  }

  return res
}

export async function searchPhotos({
  query,
  page,
  perPage = PER_PAGE,
}: {
  query: string
  page: number
  perPage?: number
}): Promise<UnsplashPhoto[]> {
  const params = new URLSearchParams({
    query,
    page: page.toString(),
    per_page: perPage.toString(),
  })

  const res = await unsplashFetch(`/search/photos?${params.toString()}`)
  const data: UnsplashSearchResponse = await res.json()

  return data.results
}

export async function fetchPhotosByTab({
  tab,
  page,
  perPage = PER_PAGE,
}: {
  tab: PhotoTab
  page: number
  perPage?: number
}): Promise<UnsplashPhoto[]> {
  if (tab === 'Featured') {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    })

    const res = await unsplashFetch(`/photos?${params.toString()}`)

    return (await res.json()) as UnsplashPhoto[]
  }

  return searchPhotos({ query: tab, page, perPage })
}
