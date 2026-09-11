import { SearchForm } from '@/components/layout/search-form'

const HERO_CONTENT = {
  title: 'Unsplash',
  subtitle: "The internet's source for visuals. Powered by creators everywhere.",
}

export function Hero({
  title = HERO_CONTENT.title,
  subtitle = HERO_CONTENT.subtitle,
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section id="hero" className="grid2:block laptop:px-6 hidden px-4 pt-10">
      <h1 className="text-5xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground mt-3 max-w-md text-lg">{subtitle}</p>
      <div className="mt-6 max-w-xl">
        <SearchForm />
      </div>
    </section>
  )
}
