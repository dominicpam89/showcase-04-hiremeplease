// app/api/auth/route.ts
import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "firebase-admin/auth";

// Initialize Firebase Admin SDK if not already initialized
const adminAuth = getAuth();

export async function POST(request: NextRequest) {
	const body = await request.json();
	const token = body.token;

	if (token) {
		try {
			// Verify the Firebase ID token using Firebase Admin SDK
			const decodedToken = await adminAuth.verifyIdToken(token);

			// Set the token in an HTTP-only cookie
			const response = NextResponse.json({
				message: "Token received",
				user: decodedToken,
			});
			response.cookies.set({
				name: "auth",
				value: token,
				httpOnly: true,
				path: "/",
				secure: true,
				sameSite: "lax",
			});

			return response;
		} catch (error) {
			console.error("Token verification failed:", error);
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}
	} else {
		// Handle logout by clearing the auth cookie
		const response = NextResponse.json({ message: "Logged out" });
		response.cookies.delete("auth");

		return response;
	}
}
