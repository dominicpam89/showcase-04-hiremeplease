import { NextRequest, NextResponse } from "next/server";
import { admin } from "@/firebase.config";
import { cookies } from "next/headers";
import { LimitedUserInfoType } from "@/lib/services/auth.service";

/**
 * Check if the token has already expired
 * @param exp Expiration time from the Firebase token
 * @returns true if the token is expired, false otherwise
 */
export function isTokenExpired(exp: number): boolean {
	const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
	return exp < currentTime; // If expiration time is in the past
}

/**
 * Set the cookie with an expiration synchronized to the token's expiration
 * @param sessionData Data to be stored in the session cookie
 * @param exp Expiration time from the Firebase token (in seconds)
 */
export function setCookieExpiryBasedOnToken(sessionData: string, exp: number) {
	const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
	const maxAge = exp - currentTime; // Calculate remaining lifetime of the token

	// Set the session cookie with the same expiration time as the Firebase token
	cookies().set("session-token", sessionData, {
		httpOnly: true,
		sameSite: "strict",
		path: "/",
		maxAge, // Cookie expiration is set to match the token expiration
	});
}

export async function POST(request: NextRequest) {
	const { token, limitedUserInfo } = await request.json();
	const auth = admin.auth();
	if (token) {
		try {
			const { exp } = await auth.verifyIdToken(token);
			const tokenHasExpired = isTokenExpired(exp);
			if (tokenHasExpired) {
				cookies().delete("session-token");
			}
			const sessionData = JSON.stringify(limitedUserInfo);
			setCookieExpiryBasedOnToken(sessionData, exp);
		} catch (error) {
			cookies().delete("session-token");
		}
	} else {
		cookies().delete("session-token");
	}
}
