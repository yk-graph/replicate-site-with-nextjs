import { Fragment } from 'react'
import Link from 'next/link'
import { Bell, Bookmark, Download, Folders, Image as ImageIcon, PenTool, User, type LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Logo } from './logo'
import { SidebarMenu } from './sidebar-menu'

type NavItem = {
  label: string
  Icon: LucideIcon
  active?: boolean
}

const NAV_GROUPS: NavItem[][] = [
  [
    { label: 'Photos', Icon: ImageIcon, active: true },
    { label: 'Illustrations', Icon: PenTool },
  ],
  [
    { label: 'Collections', Icon: Folders },
    { label: 'Download History', Icon: Download },
  ],
  [{ label: 'Bookmarks', Icon: Bookmark }],
]

function SidebarLink({ label, Icon, active }: NavItem) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <a
            href="#"
            aria-label={label}
            className={cn(
              'hover:bg-muted flex size-10 items-center justify-center rounded-lg transition-colors',
              active ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground',
            )}
          />
        }
      >
        <Icon className="size-6" />
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}

export function SideBar() {
  return (
    <aside className="bg-background laptop:flex fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center border-r py-3">
      <Link
        href="/"
        aria-label="Unsplash Home"
        title="Home — Unsplash"
        className="hover:bg-muted mb-1 flex size-10 items-center justify-center rounded-lg"
      >
        <Logo className="size-7" />
      </Link>

      {NAV_GROUPS.map((group, index) => (
        <Fragment key={index}>
          {index > 0 && <div className="bg-border my-6 h-px w-6" />}
          <div className="flex flex-col items-center gap-1">
            {group.map((item) => (
              <SidebarLink key={item.label} {...item} />
            ))}
          </div>
        </Fragment>
      ))}

      <div className="mt-auto flex flex-col items-center gap-1">
        <SidebarLink label="Notifications" Icon={Bell} />

        <Tooltip>
          <TooltipTrigger
            render={
              <a
                href="#"
                aria-label="Profile"
                className="hover:bg-muted flex size-10 items-center justify-center rounded-lg"
              />
            }
          >
            <span className="bg-muted text-muted-foreground flex size-8 items-center justify-center rounded-full">
              <User className="size-5" />
            </span>
          </TooltipTrigger>
          <TooltipContent side="right">Profile</TooltipContent>
        </Tooltip>

        <SidebarMenu />
      </div>
    </aside>
  )
}
