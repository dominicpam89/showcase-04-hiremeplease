import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { adminAuth } from "@/firebase-admin.config";

export async function POST(request: NextRequest) {
	console.log("debug server: running api/auth/session here");
	const { token } = await request.json();
	console.log("debug server: (request.json) - ", token);
	if (token) {
		try {
			console.log("debug server: if there's logged user");
			const verifiedToken = await adminAuth.verifyIdToken(token);
			const tokenJSON = JSON.stringify(verifiedToken);
			cookies().set("session-token", tokenJSON, {
				httpOnly: true,
				sameSite: "strict",
				path: "/",
				maxAge: verifiedToken.exp, // Cookie expiration is set to match the token expiration
			});
		} catch (error) {
			cookies().delete("session-token");
			throw error;
		}
	} else {
		console.log("debug server: if there's no logged user");
		cookies().delete("session-token");
	}
}
