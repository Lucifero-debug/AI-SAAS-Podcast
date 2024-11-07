import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes=createRouteMatcher([
  '/',
  '/discover',
  '/podcast',
  '/profile',
])

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    // Always run for API routes
    '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)',
  ],
};