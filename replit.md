# Nextlink Fashion - Corporate Website

## Overview

Nextlink Fashion is a corporate website for an apparel manufacturing company headquartered in Hong Kong. The site showcases the company's services, product categories (ladies', men's, and children's garments), certifications, and blog content. It serves as a lead-generation platform where potential retail partners can learn about the company and submit contact inquiries.

The application follows a full-stack architecture with a React frontend and Express backend, connected to a PostgreSQL database via Drizzle ORM. It's a multi-page marketing site with pages for Home, About, Products, Blog, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter (lightweight client-side router) with pages for Home, About, Products, Blog, and Contact
- **UI Components**: shadcn/ui component library (new-york style) built on Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables for theming. Custom brand colors defined as `nextlink-blue`, `nextlink-gold`, and `nextlink-green`
- **Typography**: Google Fonts - DM Sans (sans-serif body) and Playfair Display (serif headings)
- **Data Fetching**: TanStack React Query for server state management
- **Forms**: Contact form uses `useMutation` from React Query for submissions
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend Architecture
- **Framework**: Express 5 running on Node.js with TypeScript (compiled via tsx)
- **HTTP Server**: Node's `createServer` wrapping Express, supporting both Vite dev middleware and static file serving in production
- **API Design**: Simple REST API with endpoints:
  - `POST /api/contact` — Submit contact form inquiries (validated with Zod)
  - `GET /api/blog` — Fetch all blog posts
  - `GET /api/blog/:id` — Fetch a single blog post
- **Development Mode**: Vite dev server runs as middleware on the Express server with HMR
- **Production Mode**: Client is pre-built to `dist/public/` and served as static files with SPA fallback

### Data Layer
- **Database**: PostgreSQL (required, connection via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema** (defined in `shared/schema.ts`):
  - `contact_submissions` — Stores contact form entries (firstName, lastName, company, email, interest, message, createdAt)
  - `blog_posts` — Stores blog content (title, excerpt, content, category, readTime, publishedAt)
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Storage Pattern**: `DatabaseStorage` class in `server/storage.ts` implements an `IStorage` interface, providing a clean abstraction layer over database operations

### Build System
- **Client Build**: Vite builds React app to `dist/public/`
- **Server Build**: esbuild bundles server code to `dist/index.cjs` with selective dependency bundling (allowlist pattern to reduce cold start times)
- **Scripts**:
  - `npm run dev` — Development server with HMR
  - `npm run build` — Production build (client + server)
  - `npm start` — Run production build
  - `npm run db:push` — Push schema changes to database

## External Dependencies

### Database
- **PostgreSQL** — Primary data store, connected via `DATABASE_URL` environment variable using `pg` (node-postgres) pool
- **connect-pg-simple** — Available for session storage (included in dependencies)

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** — Database ORM and migration tooling
- **@tanstack/react-query** — Async state management for the frontend
- **zod** + **drizzle-zod** — Runtime validation, integrated with database schema
- **Radix UI** — Comprehensive set of accessible, unstyled UI primitives (accordion, dialog, dropdown, tabs, toast, tooltip, etc.)
- **wouter** — Lightweight client-side routing
- **embla-carousel-react** — Carousel functionality
- **date-fns** — Date formatting utilities
- **class-variance-authority** + **clsx** + **tailwind-merge** — CSS class composition utilities

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal** — Runtime error overlay in development
- **@replit/vite-plugin-cartographer** — Development tooling (dev only)
- **@replit/vite-plugin-dev-banner** — Development banner (dev only)
- **Custom meta-images plugin** — Updates OpenGraph meta tags with correct Replit deployment URLs