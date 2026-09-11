import type { MenuSection } from '@/data/site'
import { Logo } from './logo'

export function Footer({ sections }: { sections: MenuSection[] }) {
  return (
    <footer className="laptop:px-6 border-t px-4 py-10">
      <div className="grid2:grid-cols-3 laptop:grid-cols-5 grid grid-cols-2 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="mb-3 font-semibold">{section.title}</p>
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
      </div>

      <div className="text-muted-foreground mt-10 flex items-center gap-2 text-sm">
        <Logo className="size-5" />
        <span>Unsplash clone — study replica.</span>
      </div>
    </footer>
  )
}
