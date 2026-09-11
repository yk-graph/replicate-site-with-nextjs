import {
  Bookmark,
  Compass,
  Download,
  FolderOpen,
  Image as ImageIcon,
  Languages,
  Menu,
  PenTool,
  User,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Logo } from './logo'

const TOP_ICONS = [ImageIcon, PenTool, Compass, FolderOpen, Download, Bookmark]
const BOTTOM_ICONS = [User, Languages, Menu]

export function SideBar() {
  return (
    <aside className="bg-background laptop:flex fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center border-r py-4">
      <Logo className="size-7" />

      <nav className="mt-6 flex flex-col items-center gap-1">
        {TOP_ICONS.map((Icon, index) => (
          <Button key={index} variant="ghost" size="icon" aria-label="Sidebar item">
            <Icon className="size-5" />
          </Button>
        ))}
      </nav>

      <nav className="mt-auto flex flex-col items-center gap-1">
        {BOTTOM_ICONS.map((Icon, index) => (
          <Button key={index} variant="ghost" size="icon" aria-label="Sidebar item">
            <Icon className="size-5" />
          </Button>
        ))}
      </nav>
    </aside>
  )
}
