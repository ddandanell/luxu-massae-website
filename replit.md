# Home Massage Ubud - In-Villa Massage Service

## Overview

Home Massage Ubud is a premium mobile massage service specializing in authentic Balinese wellness treatments delivered directly to luxury villas in Ubud. The application serves as a comprehensive booking and marketing platform for high-end spa services, featuring a sophisticated dark-themed design that reflects the luxury brand positioning. The system includes detailed service catalogs, therapist profiles, customer testimonials, and a streamlined booking interface optimized for conversions and SEO visibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend built with Vite for optimal development experience and build performance. The component architecture follows a modular design with shadcn/ui providing a consistent design system built on Radix UI primitives. The styling approach combines Tailwind CSS with CSS custom properties for theming, implementing a luxury dark color scheme with gold accents that reflects the premium spa brand.

**Component Structure**: The application is organized into reusable UI components, page-specific components, and shared utilities. Key components include Hero sections, Service catalogs, Therapist profiles, Testimonials, Pricing tables, FAQ sections, and Contact forms. Each component is designed for responsive behavior and accessibility.

**State Management**: The application uses TanStack Query for server state management, providing efficient data fetching, caching, and synchronization. Form state is handled through React Hook Form with Zod validation schemas.

**Routing**: Client-side routing is implemented using Wouter, a lightweight routing library that provides essential navigation functionality without the overhead of larger routing solutions.

### Backend Architecture
The backend follows a RESTful API design using Express.js with TypeScript for type safety and better developer experience. The server implements middleware for request logging, error handling, and JSON parsing. The API structure includes endpoints for booking management and supports CRUD operations for the core business functionality.

**API Design**: The booking system provides endpoints for creating new bookings, retrieving booking lists, and updating booking statuses. Input validation is enforced using Zod schemas that are shared between frontend and backend to ensure consistency.

**Storage Layer**: The application implements an abstraction layer for data storage through the IStorage interface, currently using in-memory storage for development but designed to easily switch to persistent database solutions like PostgreSQL with Drizzle ORM.

### Data Storage Solutions
The application is configured for PostgreSQL as the primary database using Drizzle ORM for type-safe database operations. The schema defines core entities including bookings and users with proper relationships and constraints. Database migrations are managed through Drizzle Kit, and the configuration supports both development and production environments through environment variables.

**Schema Design**: The booking entity captures comprehensive customer information including personal details, villa location, preferred services, scheduling preferences, and booking status. The user entity supports authentication and authorization for administrative functions.

### Authentication and Authorization
While the current implementation focuses on the public booking interface, the architecture includes user management schemas and storage interfaces designed to support administrative authentication for booking management and therapist coordination.

### Styling and Design System
The application implements a luxury spa aesthetic using a carefully curated color palette of deep browns, warm golds, and muted earth tones. Typography combines serif fonts (Playfair Display) for headings with clean sans-serif fonts (Inter) for body text. The design system includes custom CSS properties for consistent theming and smooth animations that enhance the premium feel.

**Component Library**: Built on shadcn/ui components that provide accessible, customizable UI elements including forms, dialogs, cards, and interactive elements. The components are styled to match the luxury brand identity while maintaining usability and accessibility standards.

## External Dependencies

### UI and Styling Dependencies
- **Radix UI Components**: Comprehensive set of accessible UI primitives including dialogs, dropdowns, forms, and navigation components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **Class Variance Authority**: Utility for building type-safe component variants

### Development and Build Tools
- **Vite**: Modern build tool providing fast development server and optimized production builds
- **TypeScript**: Static type checking for improved code quality and developer experience
- **PostCSS**: CSS processing for Tailwind CSS integration

### Data Management
- **TanStack React Query**: Server state management with caching, synchronization, and background updates
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Runtime type validation and schema definition for API contracts

### Database and ORM
- **Drizzle ORM**: Type-safe SQL database toolkit for PostgreSQL interaction
- **Neon Database**: Serverless PostgreSQL database platform for production deployment
- **Drizzle Kit**: Database migration and schema management tooling

### Routing and Navigation
- **Wouter**: Lightweight React router for client-side navigation

### Validation and Type Safety
- **Drizzle Zod**: Integration between Drizzle ORM and Zod for schema validation
- **Date-fns**: Date manipulation and formatting utilities

The architecture prioritizes type safety, developer experience, and scalability while maintaining the luxury brand experience that reflects Home Massage Ubud's premium positioning in the Ubud wellness market.