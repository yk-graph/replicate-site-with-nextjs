'use client'

import { PHOTO_TABS } from '@/lib/photo-tabs'
import { cn } from '@/lib/utils'
import { useFeed } from './feed-context'

export function Nav() {
  const { activeTab, setActiveTab } = useFeed()

  return (
    <nav className="bg-background sticky top-0 z-20 border-b">
      <ul className="laptop:px-6 flex [scrollbar-width:none] items-center gap-6 overflow-x-auto px-4 py-3">
        {PHOTO_TABS.map((tab) => (
          <li key={tab}>
            <button
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                'relative pb-2 text-sm whitespace-nowrap transition-colors',
                activeTab === tab ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {tab}
              {activeTab === tab && <span className="bg-foreground absolute inset-x-0 bottom-0 h-0.5" />}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
