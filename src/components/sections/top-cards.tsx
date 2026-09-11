import { Plus } from 'lucide-react'

export function TopCards() {
  return (
    <section id="top" className="grid2:grid-cols-2 laptop:px-6 grid gap-4 px-4 py-6">
      <div className="rounded-xl border p-6">
        <p className="font-medium">
          Contribute your first <span className="font-bold">photo</span>
        </p>
        <div className="mt-4 flex h-48 items-center justify-center rounded-lg border-2 border-dashed">
          <div className="bg-primary text-primary-foreground flex size-12 items-center justify-center rounded-full">
            <Plus className="size-6" />
          </div>
        </div>
      </div>

      <div className="relative flex min-h-56 flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 p-6 text-white">
        <p className="text-sm font-medium opacity-90">Unsplash+</p>
        <p className="mt-1 text-2xl font-bold">Back to School</p>
        <p className="text-sm opacity-90">69 images</p>
      </div>
    </section>
  )
}
