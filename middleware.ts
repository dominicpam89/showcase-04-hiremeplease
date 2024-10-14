import { type NextRequest, NextResponse } from "next/server";

export function authMiddleware(request: NextRequest) {
	const sessionData = request.cookies.get("session-token");

	// If session token is missing, redirect to login
	if (!sessionData) {
		return NextResponse.redirect("/login");
	}

	// If session token exists, allow access to the page
	return NextResponse.next();
}

export function middleware(request: NextRequest) {
	/**
	 * temporary turn off the routes protection by auth user
	 * */
	return authMiddleware(request);
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
