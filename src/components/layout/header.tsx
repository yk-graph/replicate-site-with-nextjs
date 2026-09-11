'use client'

import { useState } from 'react'
import { ChevronDown, Languages, Menu, User, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { MenuSection } from '@/data/site'
import { Logo } from './logo'
import { SearchForm } from './search-form'

export function Header({ menuSections }: { menuSections: MenuSection[] }) {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-background sticky top-0 z-30 border-b">
      <div className="laptop:flex hidden items-center gap-4 px-6 py-3">
        <SearchForm className="max-w-3xl" />
        <div className="ml-auto flex items-center gap-4 whitespace-nowrap">
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
            Get Unsplash+
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
            Log in
          </a>
          <Button variant="outline">Submit an image</Button>
        </div>
      </div>

      <div className="laptop:hidden">
        <div className="flex items-center gap-2 px-4 py-3">
          <Logo className="size-6" />

          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              aria-expanded={categoryOpen}
              onClick={() => setCategoryOpen((open) => !open)}
            >
              Photos
              <ChevronDown className="size-4" />
            </Button>
            {categoryOpen && (
              <div className="bg-popover text-popover-foreground absolute top-full left-0 z-40 mt-1 w-44 rounded-lg border p-1 shadow-md">
                <button className="hover:bg-muted flex w-full rounded-md px-3 py-2 text-left text-sm">Photos</button>
                <button className="hover:bg-muted text-muted-foreground flex w-full rounded-md px-3 py-2 text-left text-sm">
                  Illustrations
                </button>
              </div>
            )}
          </div>

          <div className="ml-auto flex items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Language">
              <Languages className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <Menu className="size-5" />
            </Button>
          </div>
        </div>

        <div className="px-4 pb-3">
          <SearchForm />
        </div>
      </div>

      {menuOpen && (
        <div className="laptop:hidden fixed inset-0 z-50">
          <button aria-label="Close menu" className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="bg-background absolute inset-y-0 right-0 flex w-80 max-w-[85%] flex-col overflow-y-auto p-4 shadow-xl">
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X className="size-5" />
              </Button>
            </div>

            <nav className="flex flex-col gap-6 py-2">
              {menuSections.map((section) => (
                <div key={section.title}>
                  <p className="mb-2 font-semibold">{section.title}</p>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="mt-auto flex gap-2 border-t pt-4">
              <Button variant="outline" className="flex-1">
                Submit an image
              </Button>
              <Button variant="outline" className="flex-1">
                Log in
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
