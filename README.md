# Abdikarin Mohamed Portfolio

Personal portfolio website for Abdikarin Mohamed, built to highlight software engineering experience, backend/product work, projects, education, and contact links.

## Overview

This portfolio includes:

- A centered hero introduction
- About section with headshot and technology list
- Interactive tabbed experience section
- Featured software/project carousel
- Project card grid
- Education timeline
- Minimal footer

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- CSS animations
- `next/font` for Google Font loading

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Available Scripts

Run locally in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production build:

```bash
npm run start
```

Lint the project:

```bash
npm run lint
```

## Project Structure

```text
app/
  components/
    ExperienceSection.tsx
    ProjectsSection.tsx
  globals.css
  layout.tsx
  page.tsx
public/
  image.png
  CallRecover.png
  Port1.png
```

## Notes

- Main page content lives in `app/page.tsx`.
- Experience tabs live in `app/components/ExperienceSection.tsx`.
- Project carousel and cards live in `app/components/ProjectsSection.tsx`.
- Global styling lives in `app/globals.css`.
- Static images are served from `public/`.

## Deployment

This is a standard Next.js app and can be deployed on Vercel or any platform that supports Next.js.
