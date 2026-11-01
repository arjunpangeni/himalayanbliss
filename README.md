# Himalaya London

A Next.js + TypeScript + Prisma starter for a premium massage studio website and booking flow, aligned with the design and delivery plan in the project brief.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- shadcn-inspired UI primitives
- Zod validation

## Getting started

1. Copy `.env.example` to `.env.local` and fill in environment values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
4. Run the app:
   ```bash
   npm run dev
   ```

## Project goals

This scaffold includes:

- a polished public landing page for the brand
- a service and pricing layout
- an admin dashboard shell
- a Prisma schema for bookings, therapists, discounts and audit logging
- a clear structure for the real booking, verification and customer management workflow

## Notes

This is intentionally structured as a production-ready starting point, not a full finished booking system. The implementation can be extended into the detailed email verification flow, time-zone-safe slot generation, and admin role model described in the brief.
