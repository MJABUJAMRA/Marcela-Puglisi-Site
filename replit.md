# Dra. Marcela Puglisi - Harmonização Orofacial Website

## Overview

This is a professional website for Dra. Marcela Puglisi, a dental surgeon specializing in orofacial harmonization treatments. The website serves as a marketing and informational platform showcasing her services, expertise, and blog content about aesthetic facial procedures. The site is built in Portuguese (Brazilian) and targets clients seeking facial aesthetic treatments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state caching
- **Styling**: Tailwind CSS with custom theme variables and CSS-in-JS approach
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and interactive elements
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix (currently minimal routes)
- **Static Serving**: Express serves built frontend assets in production
- **Development**: Vite dev server with HMR proxied through Express

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Schema**: Basic users table with id, username, and password fields
- **Storage Pattern**: Abstract IStorage interface with in-memory implementation (MemStorage) as default, designed to swap to database-backed storage

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route pages (Home, Blog, TreatmentDetail)
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── attached_assets/  # Static assets and content files
```

### Key Design Decisions
1. **Monorepo Structure**: Client and server share a single repository with shared types through the `shared/` directory
2. **Path Aliases**: TypeScript path aliases (`@/`, `@shared/`, `@assets/`) for clean imports
3. **Static Content**: Treatment and blog content is currently hardcoded in page components rather than fetched from database
4. **Responsive Design**: Mobile-first approach with hamburger menu for navigation

## External Dependencies

### Third-Party Services
- **WhatsApp Integration**: Direct WhatsApp links for appointment scheduling (phone: 5511999027509)
- **Google Fonts**: Cormorant Garamond (serif) and Inter (sans-serif) font families

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations managed in `./migrations` directory
- **Session Storage**: connect-pg-simple available for session management

### Development Tools
- **Replit Plugins**: Custom Vite plugins for Replit integration (cartographer, dev-banner, runtime-error-modal)
- **Meta Images Plugin**: Custom plugin for OpenGraph image handling in Replit deployments