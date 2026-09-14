'use client'

import { PHOTO_TABS } from '@/lib/photo-tabs'
import { cn } from '@/lib/utils'
import { useFeed } from './feed-context'

export function Nav() {
  const { activeTab, setActiveTab } = useFeed()

  return (
    <nav className="bg-background sticky top-0 z-20 border-b">
      <ul className="laptop:px-6 flex scrollbar-none items-center gap-6 overflow-x-auto px-4">
        {PHOTO_TABS.map((tab) => (
          <li key={tab}>
            <button
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                '-mb-px border-b-2 py-3 text-sm whitespace-nowrap transition-colors',
                activeTab === tab
                  ? 'border-foreground text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground border-transparent',
              )}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
