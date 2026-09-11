'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

import { PHOTO_TABS, type PhotoTab } from '@/lib/photo-tabs'

type FeedContextValue = {
  activeTab: PhotoTab
  setActiveTab: (tab: PhotoTab) => void
}

const FeedContext = createContext<FeedContextValue | null>(null)

export function FeedProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<PhotoTab>(PHOTO_TABS[0])

  return <FeedContext.Provider value={{ activeTab, setActiveTab }}>{children}</FeedContext.Provider>
}

export function useFeed() {
  const context = useContext(FeedContext)

  if (!context) {
    throw new Error('useFeed must be used within a FeedProvider')
  }

  return context
}
