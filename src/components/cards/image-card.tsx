import Image from 'next/image'

import type { UnsplashPhoto } from '@/types/photo'

export function ImageCard({ photo }: { photo: UnsplashPhoto }) {
  const alt = photo.alt_description ?? photo.description ?? `Photo by ${photo.user.name}`

  return (
    <figure className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg">
      <Image
        src={photo.urls.regular}
        alt={alt}
        width={photo.width}
        height={photo.height}
        sizes="(max-width: 767px) 100vw, (max-width: 1074px) 50vw, 33vw"
        style={{ backgroundColor: photo.color ?? undefined }}
        className="h-auto w-full"
      />

      <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
        <Image
          src={photo.user.profile_image.small}
          alt={photo.user.name}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="text-sm font-medium text-white">{photo.user.name}</span>
      </figcaption>
    </figure>
  )
}
