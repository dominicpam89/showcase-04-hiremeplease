import { type NextRequest, NextResponse } from "next/server";

export async function authMiddleware(request: NextRequest) {
	const token = request.cookies.get("session-token");

	// const referer = request.headers.get("referer");
	// if ((referer?.includes("login") || referer?.includes("register")) && token) {
	// 	return NextResponse.redirect(new URL("/u", request.url));
	// }

	if (!token) {
		console.log("debug middleware: no token in cookies");
		return NextResponse.redirect(new URL("/login", request.url));
	} else {
		console.log("debug middleware: token does exist in cookies");
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
