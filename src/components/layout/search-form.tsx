import { Search } from 'lucide-react'

import { cn } from '@/lib/utils'
import { SEARCH_PLACEHOLDER } from '@/data/site'

export function SearchForm({
  placeholder = SEARCH_PLACEHOLDER,
  className,
}: {
  placeholder?: string
  className?: string
}) {
  return (
    <form role="search" className={cn('relative flex w-full items-center', className)}>
      <Search className="text-muted-foreground pointer-events-none absolute left-4 size-5" />
      <input
        type="search"
        name="query"
        placeholder={placeholder}
        aria-label={placeholder}
        className="bg-muted placeholder:text-muted-foreground focus-visible:ring-ring hover:bg-muted/70 h-10 w-full rounded-full pr-4 pl-11 text-sm transition-colors outline-none focus-visible:bg-transparent focus-visible:ring-2"
      />
    </form>
  )
}
