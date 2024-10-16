import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@/firebase.config";

export function authMiddleware(request: NextRequest) {
	const user = auth.currentUser;
	console.log(auth.currentUser);
	if (!user) {
		console.log("debug middleware: no user");
		return NextResponse.redirect(new URL("/login", request.url));
	} else {
		console.log("debug middleware: user does exist");
		return NextResponse.next();
	}
}

export function middleware(request: NextRequest) {
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
