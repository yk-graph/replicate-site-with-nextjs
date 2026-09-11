import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Header } from '@/components/layout/header'
import { SideBar } from '@/components/layout/side-bar'
import { Footer } from '@/components/layout/footer'
import { FOOTER_SECTIONS, MENU_SECTIONS } from '@/data/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Unsplash clone',
  description: 'A responsive Unsplash landing page replica built with Next.js.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('h-full', 'antialiased', 'font-sans', inter.variable)}>
      <body className="flex min-h-full flex-col">
        <TooltipProvider>
          <SideBar />
          <div className="laptop:pl-16 flex min-h-full flex-1 flex-col">
            <Header menuSections={MENU_SECTIONS} />
            <main className="flex-1">{children}</main>
            <Footer sections={FOOTER_SECTIONS} />
          </div>
        </TooltipProvider>
      </body>
    </html>
  )
}
