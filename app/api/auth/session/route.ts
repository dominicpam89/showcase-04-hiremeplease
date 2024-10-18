import { initAdmin } from "@/firebase-admin.config";
import { getAuth } from "firebase-admin/auth";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	console.log("debug server: running api/auth/session");
	initAdmin();
	try {
		const { token } = await request.json();
		if (!token) {
			throw new Error("Token not provided, cookie cleared");
		}

		// Verify the token
		const verifiedToken = await getAuth().verifyIdToken(token);

		// Calculate expiration time (in seconds)
		const expiresIn = verifiedToken.exp * 1000 - Date.now();

		// Ensure expiration is positive
		if (expiresIn <= 0) {
			console.log("debug server: token has already expired");
			return NextResponse.json("Token has already expired", { status: 401 });
		}

		// Define cookie options
		const options: Partial<ResponseCookie> = {
			maxAge: expiresIn, // Cookie expiration in seconds
			httpOnly: true, // Prevent access via JS
			secure: false, // Only send over HTTPS in production
			path: "/", // Root path
			sameSite: "strict", // Prevent CSRF
		};

		const verifiedTokenString = JSON.stringify(verifiedToken);
		// Return success response with Set-Cookie header
		cookies().set("session-token", verifiedTokenString, options);
		return NextResponse.json({
			success: true,
			mesasge: "successfully setup cookies",
		});
	} catch (error) {
		// Remove the existing session-token cookie in case of an error
		cookies().delete("session-token");
		throw error;
	}
}
