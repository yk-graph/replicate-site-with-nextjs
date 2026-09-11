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
