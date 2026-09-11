import type { UnsplashPhoto, UnsplashSearchResponse } from '@/types/photo'

const BASE_URL = 'https://api.unsplash.com'

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
    throw new Error(`Unsplash API request failed with status ${res.status}: ${res.statusText}`)
  }

  return res
}

async function searchPhotos(query: string, page: number, perPage: number): Promise<UnsplashSearchResponse> {
  const params = new URLSearchParams({
    query,
    page: String(page),
    per_page: String(perPage),
  })

  const res = await unsplashFetch(`/search/photos?${params.toString()}`)
  return res.json()
}

export async function fetchFeedPhotos(page = 1, perPage = 30): Promise<UnsplashPhoto[]> {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  })

  const res = await unsplashFetch(`/photos?${params.toString()}`)
  return res.json()
}

export async function fetchPhotosByTab(tab: PhotoTab, page = 1, perPage = 30): Promise<UnsplashPhoto[]> {
  const data = await searchPhotos(tab, page, perPage)
  return data.results
}

export async function searchPhotosByKeyword(keyword: string, page = 1, perPage = 30): Promise<UnsplashSearchResponse> {
  return searchPhotos(keyword, page, perPage)
}
