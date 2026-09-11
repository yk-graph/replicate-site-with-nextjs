export interface UnsplashPhotoUrls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export interface UnsplashPhotoLinks {
  self: string
  html: string
  download: string
  download_location: string
}

export interface UnsplashUser {
  id: string
  username: string
  name: string
  portfolio_url: string | null
  profile_image: {
    small: string
    medium: string
    large: string
  }
  links: {
    self: string
    html: string
    photos: string
  }
}

export interface UnsplashPhoto {
  id: string
  created_at: string
  updated_at: string
  promoted_at: string | null
  width: number
  height: number
  color: string | null
  blur_hash: string | null
  description: string | null
  alt_description: string | null
  likes: number
  urls: UnsplashPhotoUrls
  links: UnsplashPhotoLinks
  user: UnsplashUser
}

export interface UnsplashSearchResponse {
  total: number
  total_pages: number
  results: UnsplashPhoto[]
}
