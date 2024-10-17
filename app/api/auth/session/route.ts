import { getAuth } from "firebase-admin/auth";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function POST(request: Request) {
	console.log("debug server: running api/auth/session");
	try {
		const { token } = await request.json();

		if (!token) {
			return new Response("Token not provided, cookie cleared", {
				status: 400,
				headers: {
					"Set-Cookie": `session-token=; Max-Age=0; Path=/; HttpOnly; Secure=${false}; SameSite=Strict`,
				},
			});
		}

		console.log("debug server: token is exist");
		// Verify the token
		const verifiedToken = await getAuth().verifyIdToken(token);

		// Calculate expiration time (in seconds)
		const expiresIn = verifiedToken.exp * 1000 - Date.now();

		// Ensure expiration is positive
		if (expiresIn <= 0) {
			console.log("debug server: token has already expired");
			return new Response("Token has already expired", { status: 401 });
		}

		// Create a session cookie
		const sessionCookie = await getAuth().createSessionCookie(token, {
			expiresIn: expiresIn, // transform back to seconds
		});

		// Define cookie options
		const options: Partial<ResponseCookie> = {
			maxAge: expiresIn, // Cookie expiration in seconds
			httpOnly: true, // Prevent access via JS
			secure: false, // Only send over HTTPS in production
			path: "/", // Root path
			sameSite: "strict", // Prevent CSRF
		};

		console.log("debug server: sessionCookie-->", sessionCookie);
		console.log("debug server: response cookies options-->", options);
		// Return success response with Set-Cookie header
		const response = new Response("Successfully set cookie", {
			status: 200,
			headers: {
				"Set-Cookie": `token=${sessionCookie}; Max-Age=${options.maxAge}; Path=${options.path}; HttpOnly; Secure=${options.secure}; SameSite=${options.sameSite}`,
			},
		});
		console.log("debug server: response with cookies in header is set");
		return response;
	} catch (error) {
		console.error("Error in setting session cookie:", error);

		// Remove the existing session-token cookie in case of an error
		return new Response("Failed to set cookie, cookie cleared", {
			status: 500,
			headers: {
				"Set-Cookie": `session-token=; Max-Age=0; Path=/; HttpOnly; Secure=${false}; SameSite=Strict`,
			},
		});
	}
}
