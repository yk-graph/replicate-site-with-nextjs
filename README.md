# Unsplash Landing Page Clone

A responsive Unsplash landing page built with Next.js (App Router).

## Live Demo

https://replicate-site-with-nextjs.vercel.app/

## Highlights

- **Close-to-real UI with shadcn/ui.** Used shadcn/ui components to recreate the Unsplash interface as closely as possible.
- **Real Unsplash API.** Photos and search results come from the actual Unsplash API, not mock data.
- **Infinite scroll with IntersectionObserver.** More photos load automatically as you scroll, using `IntersectionObserver` instead of scroll events.

## Tech Stack

- Next.js 16 (App Router) / React 19 / TypeScript
- Tailwind CSS v4, shadcn/ui
- MongoDB Atlas, Web3Forms, Unsplash API

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env.local` file:

```
UNSPLASH_ACCESS_KEY=...
MONGODB_URI=...
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...
```

The full assignment brief is in [ASSIGNMENT.md](./ASSIGNMENT.md).
