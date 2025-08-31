'use server';

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/profile(.*)',
]);

const isAdminRoute = createRouteMatcher([
  '/admin(.*)'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  if (isAdminRoute(req)) {
    auth().protect({ permission: "org:product:managment" }); 
  }
});

export const config = {
  matcher: [
    "/((?!_next/image|_next/static|favicon.ico|api/orders/notification).*)",
    "/",
  ],
};

