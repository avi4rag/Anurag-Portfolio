# Anurag Portfolio

> A visual portfolio for Anurag, a full-stack developer and Software Product Engineering student based in Jaipur, India.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-111111?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-149eca?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/tests-Vitest-6e9f18?logo=vitest&logoColor=white)](https://vitest.dev/)

## Overview

This is a Next.js portfolio built around a tactile, editorial hero experience and a set of focused project case studies. The homepage combines a textured blue sky, responsive typography, animated headline characters, a custom cassette-style audio player, project thumbnails, testimonials, and a cream organic wave transition.

The site is designed to show both the finished work and the engineering behind it: accessible navigation, responsive layouts, metadata, sitemap generation, robots rules, animated interactions, real local audio playback, and production-oriented project write-ups.

## Highlights

- Responsive editorial hero with custom serif and sans-serif typography.
- Character-level headline hover interaction: only the character under the pointer changes color.
- Animated headline verbs: `builds`, `scales`, and `deploys`.
- Custom cassette player powered by a local MP3 file, not browser audio controls.
- Real play, pause, resume, seek, duration, elapsed-time, loading, and ended states.
- Reels that rotate only while the audio is playing.
- Project cards with local thumbnails and responsive image cropping.
- Four project case-study pages with live and repository links where available.
- About, contact, testimonial, accessibility, sitemap, and robots routes.
- Scroll reveals and layered hero motion powered by Framer Motion.

## Featured Work

| Project | Focus | Technologies |
| --- | --- | --- |
| [GeoMonitor](/work/geomonitor) | AI-powered geopolitical intelligence and cross-domain risk analysis | React, Node.js, PostgreSQL, Docker, Gemini API |
| [StudyShield](/work/studyshield) | Early-warning dashboard for student engagement and risk signals | Next.js, Prisma, PostgreSQL, Auth.js |
| [Orbit](/work/orbit) | Goal-manifestation experience with binaural audio and AI guidance | React, Node.js, MongoDB, Web Audio API |
| [Divya Setu](/work/divya-setu) | Smart darshan queue and crowd-management system for Somnath Temple | React, TypeScript, Supabase |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage hero, selected work, testimonials, and about teaser |
| `/about` | Background, education, skills, experience, and supporting details |
| `/contact` | Contact and collaboration information |
| `/work/geomonitor` | GeoMonitor case study |
| `/work/studyshield` | StudyShield case study |
| `/work/orbit` | Orbit case study |
| `/work/divya-setu` | Divya Setu case study |
| `/sitemap.xml` | Generated sitemap for the core pages |
| `/robots.txt` | Crawler rules and sitemap reference |

## Tech Stack

- **Framework:** Next.js App Router `16.3.8`
- **UI:** React `19.2.8` and TypeScript
- **Styling:** Tailwind CSS `4` with project-level CSS tokens in `app/globals.css`
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans and Fraunces through `next/font/google`
- **Testing:** Vitest
- **Deployment target:** Vercel or any Node-compatible Next.js host

## Project Structure

```text
app/
  page.tsx                 Homepage composition
  about/page.tsx           About page
  contact/page.tsx         Contact page
  work/                    Project case studies
  globals.css              Design tokens and shared styles
  layout.tsx               Fonts, metadata, and global providers
  robots.ts                Robots metadata route
  sitemap.ts               Sitemap metadata route

components/
  layout/                  Navbar and footer
  sections/                Homepage sections
  ui/                      Cards, reveals, hero utilities, and controls

public/
  audio/                   Local cassette audio source
  images/                  Portrait and supporting imagery
  project/                 Project card thumbnails

tests/
  portfolio-content.test.ts Route, metadata, identity, project, and content checks
```

## Local Assets

The custom cassette uses the project-owned audio file:

```text
public/audio/There Is a Light That Never Goes Out (2011 Remaster).mp3
```

Project thumbnails are mapped one-to-one in the work cards:

```text
public/project/GeoMonitor_ Image.png
public/project/StudyShield.png
public/project/Orbit.png
public/project/Divya Setu.png
```

The browser loads these assets through paths beginning with `/audio/` and `/project/`, so they are served directly by Next.js from `public/`.

## Getting Started

### Prerequisites

- Node.js 20 or newer is recommended.
- npm 10 or newer is recommended.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page supports hot reload while you work.

If port `3000` is already in use, start Next.js on another port:

```bash
npm run dev -- --port 3002
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run the ESLint configuration |
| `npm test` | Run the Vitest test suite once |

## Testing

Run the content and route checks with:

```bash
npm test
```

The current suite verifies:

- All seven core sitemap routes.
- Robots configuration and sitemap output.
- Identity and contact specifications.
- The six required testimonials.
- Project live links and repository rules.
- Academic statistics.

Before opening a pull request, also run:

```bash
npm run build
```

For visual changes, check the hero and project cards at desktop and mobile widths, especially `1440px`, `1024px`, `768px`, `480px`, and `390px`.

## Production Build

Build and run the app locally in production mode:

```bash
npm run build
npm run start
```

The project is compatible with Vercel's standard Next.js deployment flow:

1. Import the repository into Vercel.
2. Keep the default Next.js build settings.
3. Deploy the project from the repository root.

No external database or environment variables are required for the current portfolio build.

## Accessibility Notes

- The page includes a skip-to-content link.
- Main content has a programmatic focus target.
- Navigation controls expose labels and expanded state.
- The cassette play button and seek control expose accessible names and values.
- Decorative visual elements are hidden from assistive technology where appropriate.
- Reduced-motion preferences are respected by the global animation fallback.

## Content and Contribution Guidelines

When adding or changing a project card:

1. Keep the project ordering and information hierarchy intact.
2. Add a matching thumbnail under `public/project/` when a visual is needed.
3. Keep image paths exact and case-sensitive.
4. Preserve responsive behavior and the existing card hover interaction.
5. Update the relevant case-study route and tests when public project facts change.
6. Run `npm test` and `npm run build` before opening a pull request.

Keep visual changes focused. The hero, cassette, headline, and project cards each have deliberate composition rules, so a small local change is preferable to a global override.

## Links

- [Live portfolio](https://anurag-portfolio.vercel.app/)
- [GitHub repository](https://github.com/avi4rag/Anurag-Portfolio)
- [LinkedIn](https://www.linkedin.com/in/avi4rag/)
- [GitHub profile](https://github.com/avi4rag)

## License

This repository is a personal portfolio. Project content, imagery, audio, and case-study material belong to their respective owners and should not be reused without permission.
