import { type NextRequest, NextResponse } from "next/server";

export function authMiddleware(request: NextRequest) {
	// Get the "auth" cookie
	const authCookie = request.cookies.get("auth");

	// If no auth cookie is found, redirect to login
	if (!authCookie) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	try {
		// Parse the auth cookie
		const { userId } = JSON.parse(authCookie.value);

		// If the userId exists, allow access
		if (userId) {
			return NextResponse.next();
		}
	} catch (error) {
		console.error("Failed to parse auth cookie:", error);
	}

	// If parsing fails or userId is missing, redirect to login
	return NextResponse.redirect(new URL("/login", request.url));
}

export function middleware(request: NextRequest) {
	/**
	 * temporary turn off the routes protection by auth user
	 * */
	// return authMiddleware(request);

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
