import { NextResponse, NextRequest } from "next/server";

// Define the POST handler
export async function POST(request: NextRequest) {
	try {
		// Parse the incoming request body
		const body = await request.json();
		const { loggedIn, userId, email } = body;

		// Validate the request data
		if (typeof loggedIn !== "boolean") {
			return NextResponse.json(
				{ message: "Invalid data: 'loggedIn' must be a boolean" },
				{ status: 400 }
			);
		}

		// If the user is logged in, set a session cookie
		if (loggedIn && userId && email) {
			// Create a new response with a success message
			const response = NextResponse.json({
				message: "Session updated",
				userId,
				email,
			});

			// Set the session cookie with the user ID (HTTP-only)
			response.cookies.set({
				name: "auth",
				value: JSON.stringify({ userId, email }),
				httpOnly: true,
				path: "/",
				secure: true,
				sameSite: "lax",
			});

			return response;
		} else if (!loggedIn) {
			// If logged out, clear the auth cookie
			const response = NextResponse.json({ message: "Logged out" });
			response.cookies.delete("auth");
			return response;
		} else {
			// Handle cases where required fields are missing
			return NextResponse.json(
				{ message: "Missing userId or email for logged-in session" },
				{ status: 400 }
			);
		}
	} catch (error) {
		console.error("Error handling session:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
