# WD-301: Replicate a Website (Next.js)

## Assignment Overview
The goal of this assignment is to **replicate the website linked below** as a **responsive landing page** using **Next.js (App Router)** while following best practices.

> ## Website to Replicate
> **[https://unsplash.com/](https://unsplash.com/)**
>
> Study this website carefully and recreate its layout, sections, and overall design as closely as possible.
>
> Need extra design inspiration? Browse **[Dribbble Landing Pages](https://dribbble.com/search/landing%20page)**.

---

## Features & Requirements

▷ **Single Page Application (SPA)**
   - The landing page should be a single route (e.g., `/`).

▷ **Component-Based Structure**
   - Each section must be its **own component**.
   - Components **should receive content as props** from `page.tsx`.
   - You can **reuse components** where applicable.
   - **TypeScript is required**: type your props properly (interfaces/types).

▷ **Responsive Design**
   - The layout must be **mobile-friendly** and **adaptive**.
   - Test on common breakpoints (mobile, tablet, desktop).
   - **Tailwind CSS is recommended**, but any modern styling approach is acceptable.

▷ **Faithful Replication**
   - The **layout and structure must match the reference website**.
   - You may adjust the **color scheme** slightly, but the design should remain clearly recognizable.

▷ **Email Subscription**
   - The last section should include an **email input field**.
   - Build the form using **[Web3Forms](https://web3forms.com/)**.
   - Store the submitted email in a **free online database**, e.g., **[Firebase](https://firebase.google.com/)** or **[MongoDB Atlas](https://www.mongodb.com/atlas)** (free Postgres options like [Supabase](https://supabase.com/) or [Neon](https://neon.tech/) are also fine).

▷ **Smooth Scroll Navigation**
   - Navbar buttons should be **clickable** and should scroll smoothly to the corresponding section.

▷ **Clickable Elements**
   - Buttons and links should have **clear styling** to indicate interactivity (hover/focus states).
   - Non-functional buttons should still appear as clickable UI elements.

---

## Icons & Resources
- Use icons from:
  - [Lucide](https://lucide.dev/icons/)
  - [Radix UI](https://www.radix-ui.com/)
  - Any other trusted source.
- Free stock images: [Unsplash](https://unsplash.com/)
- Use [next/image](https://nextjs.org/docs/app/api-reference/components/image) for optimized images where applicable.

---

## Marking Criteria
Your submission will be marked on:
- How closely it follows **good industry-standard practices**
- **Good typography** (font choices, sizes, and spacing)
- How **fast and responsive** the page is

---

## Submission
- Push your code to **GitHub** with a clean commit history.
- Include clear **setup instructions** (install & run) in your repository.

> **IMPORTANT: Include a link to your DEPLOYED site** (e.g., [Vercel](https://vercel.com/)) **in your submission.**
