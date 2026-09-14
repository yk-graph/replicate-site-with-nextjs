'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <Button
      size="icon-lg"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-6 z-50 rounded-full shadow-lg"
    >
      <ArrowUp />
    </Button>
  )
}
