// middleware.ts

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("auth");

	if (!token) {
		// Redirect to login page if no token is found
		return NextResponse.redirect(new URL("/login", request.url));
	}

	// Token is present, allow access
	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
        Match all routes except the following:
        - /login
        - /register
        - /public (and any sub-paths of /public)
        - /favicon.ico (for favicon)
        - /_next/static/ (Next.js internal files)
        - /_next/image (Next.js image optimization)
      */
		"/((?!login|register|public|favicon.ico|_next/static|_next/image).*)",
	],
};
