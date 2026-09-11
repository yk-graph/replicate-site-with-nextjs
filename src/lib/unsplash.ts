import type { UnsplashPhoto, UnsplashSearchResponse } from '@/types/photo'
import { UnsplashError } from './errors'

const BASE_URL = 'https://api.unsplash.com'
const PER_PAGE = 30

export const PHOTO_TABS = [
  'Featured',
  'Fall',
  'Wallpapers',
  '3D Renders',
  'Nature',
  'Textures',
  'Film',
  'Architecture',
  'Street Photography',
  'Experimental',
  'Travel',
  'People',
] as const

export type PhotoTab = (typeof PHOTO_TABS)[number]

export function isPhotoTab(value: string): value is PhotoTab {
  return (PHOTO_TABS as readonly string[]).includes(value)
}

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
