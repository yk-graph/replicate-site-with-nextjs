import { cn } from '@/lib/utils'
import { Logo } from './logo'

type SidebarItem = {
  label: string
  path: string
  active?: boolean
}

const NAV_GROUPS: SidebarItem[][] = [
  [
    { label: 'Photos', path: 'M6 17h12l-3.75-5-3 4L9 13l-3 4Zm-3 4V3h18v18H3Zm2-2h14V5H5v14Z', active: true },
    {
      label: 'Illustrations',
      path: 'm22.716 9.085-4.243 4.243-.8-.8-1.176 5.877L1.6 21.715 4.91 6.819l5.879-1.175-.801-.8L14.23.6l8.485 8.485ZM6.581 8.523l-1.942 8.74 4.125-4.126a1.998 1.998 0 0 1 3.346-1.93 1.997 1.997 0 0 1-1.93 3.344l-4.127 4.127 8.74-1.944 1.181-5.906-3.486-3.485-5.907 1.18Zm6.236-3.68 5.656 5.656 1.415-1.414-5.657-5.656-1.414 1.414Z',
    },
  ],
  [
    { label: 'Collections', path: 'M2 20V7h2v11h15v2H2Zm4-4V3h6l2 2h8v11H6Zm2-2h12V7h-6.825l-2-2H8v9Z' },
    {
      label: 'Download History',
      path: 'm12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-8 4v-5h2v3h12v-3h2v5H4Z',
    },
  ],
  [{ label: 'Bookmarks', path: 'M5 21V3h14v18l-7-3zm2-3.05 5-2.15 5 2.15V5H7z' }],
]

export function SideBar() {
  return (
    <aside className="bg-background laptop:flex fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center gap-2 border-r py-3">
      <a
        href="#"
        aria-label="Unsplash Home"
        title="Home — Unsplash"
        className="hover:bg-muted flex size-10 items-center justify-center rounded-lg"
      >
        <Logo className="size-7" />
      </a>

      {NAV_GROUPS.map((group, index) => (
        <div key={index} className="flex flex-col items-center gap-1 border-t pt-2 first:border-t-0 first:pt-0">
          {group.map((item) => (
            <a
              key={item.label}
              href="#"
              aria-label={item.label}
              title={item.label}
              className={cn(
                'hover:bg-muted flex size-10 items-center justify-center rounded-lg transition-colors',
                item.active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d={item.path} />
              </svg>
            </a>
          ))}
        </div>
      ))}
    </aside>
  )
}
