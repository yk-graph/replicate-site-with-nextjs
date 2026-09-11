import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" role="img" aria-label="Unsplash" fill="currentColor" className={cn('size-6', className)}>
      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
    </svg>
  )
}
