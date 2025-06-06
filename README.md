# goon-math

A modern, responsive web app for chapter-wise collection and filtering of Subjects PYQs , built with Next.js 15, React 19, Tailwind CSS 4, and Redux Toolkit.

## Features

- 📚 Subject-wise & Chapter-wise PYQ Listing
- 🔎 Advanced Filtering (Class, Units, Status, Weak Chapters)
- 🌙 Dark Mode (with full-page support)
- ⚡ Fast UI with Tailwind CSS and Lucide icons
- 🗂️ Redux Toolkit for state management
- 🧩 Reusable Components (FilterBar, FilterDropdown, PageHeader, etc.)

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Lucide React](https://lucide.dev/)
- [Phosphor React](https://phosphoricons.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/) (for UI icons)
## Getting Started

1. Install dependencies:
   
   npm install
   
2. Run the development server:

   npm run dev
   

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

## Folder Structure

```
src/
  components/
    ui/
      FilterBar.jsx
      FilterDropdown.jsx
      PageHeader.jsx
      SubjectFilters.jsx
      ...
  app/
    utils/
      iconUtils.js
    ...
  store/
    ...
public/
  ...
```

