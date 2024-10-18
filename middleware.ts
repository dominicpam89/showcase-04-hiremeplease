import type { DecodedIdToken } from "firebase-admin/auth";
import { type NextRequest, NextResponse } from "next/server";

export async function authMiddleware(request: NextRequest) {
	const token = request.cookies.get("session-token");
	if (!token) {
		console.log("debug middleware: no user");
		return NextResponse.redirect(new URL("/login", request.url));
	} else {
		console.log("debug middleware: user does exist");
		return NextResponse.next();
	}
}

export function middleware(request: NextRequest) {
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
		"/((?!login|register|public|favicon.ico|api|_next/static|_next/image).*)",
	],
};
