import { FeedProvider } from '@/components/feed/feed-context'
import { Nav } from '@/components/feed/nav'
import { PhotoGrid } from '@/components/feed/photo-grid'
import { Hero } from '@/components/sections/hero'
import { TopCards } from '@/components/sections/top-cards'
import { Subscribe } from '@/components/sections/subscribe'

export default function Home() {
  return (
    <FeedProvider>
      <Nav />
      <Hero />
      <TopCards />
      <PhotoGrid />
      <Subscribe />
    </FeedProvider>
  )
}
