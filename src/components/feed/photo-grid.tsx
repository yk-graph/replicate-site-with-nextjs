'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import type { UnsplashPhoto } from '@/types/photo'
import { ImageCard } from '@/components/cards/image-card'
import { useFeed } from './feed-context'

const PER_PAGE = 30

export function PhotoGrid() {
  const { activeTab } = useFeed()
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const pageRef = useRef(1)
  const requestIdRef = useRef(0)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  const fetchPage = useCallback(async (tab: string, page: number, replace: boolean) => {
    const requestId = ++requestIdRef.current
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`/api/photos?tab=${encodeURIComponent(tab)}&page=${page}`)

      if (!res.ok) {
        throw new Error('Failed to load photos')
      }

      const data: UnsplashPhoto[] = await res.json()

      if (requestId !== requestIdRef.current) {
        return
      }

      setPhotos((prev) => (replace ? data : [...prev, ...data]))
      setHasMore(data.length >= PER_PAGE)
    } catch {
      if (requestId === requestIdRef.current) {
        setError('画像の取得に失敗しました。時間をおいて再度お試しください。')
      }
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    pageRef.current = 1
    fetchPage(activeTab, 1, true)
  }, [activeTab, fetchPage])

  const loadMore = useCallback(() => {
    if (loading || !hasMore) {
      return
    }

    pageRef.current += 1
    fetchPage(activeTab, pageRef.current, false)
  }, [activeTab, hasMore, loading, fetchPage])

  useEffect(() => {
    const element = sentinelRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { rootMargin: '400px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [loadMore])

  return (
    <section id="photos" className="laptop:px-6 px-4 py-6">
      <div className="grid2:columns-2 grid3:columns-3 columns-1 gap-4">
        {photos.map((photo, i) => (
          <ImageCard key={`${photo.id}-${i}`} photo={photo} />
        ))}
      </div>

      {error && <p className="text-muted-foreground py-6 text-center text-sm">{error}</p>}
      {loading && <p className="text-muted-foreground py-6 text-center text-sm">Loading…</p>}

      <div ref={sentinelRef} className="h-1" />
    </section>
  )
}
