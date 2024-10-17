import { getAuth } from "firebase-admin/auth";

export async function POST(request: Request) {
	console.log("debug server: running api/auth/session here");
	const { token } = await request.json();
	if (token) {
		try {
			console.log("debug server: if there's logged user");
			const verifiedToken = await getAuth().verifyIdToken(token);
			const tokenJSON = JSON.stringify(verifiedToken);
			console.log(tokenJSON);
			return new Response("Successfully set cookie", {
				status: 200,
				headers: {
					"Set-Cookie": `session-token=${tokenJSON}; Path=/; HttpOnly; Secure=${
						process.env.NODE_ENV === "production"
					}; SameSite=Strict; Max-Age=0`, // Delete the cookie
				},
			});
		} catch (error) {
			console.error("Error verifying token:", error);

			// Return a response with a cleared cookie on error
			return new Response("Failed to set cookie", {
				status: 500,
				headers: {
					"Set-Cookie": `session-token=; Path=/; HttpOnly; Secure=${
						process.env.NODE_ENV === "production"
					}; SameSite=Strict; Max-Age=0`, // Delete the cookie
				},
			});
		}
	} else {
		console.log("debug server: if there's no logged user");

		// Return a response with a cleared cookie when no token is present
		return new Response("Successfully cleared cookies", {
			status: 200,
			headers: {
				"Set-Cookie": `session-token=; Path=/; HttpOnly; Secure=${
					process.env.NODE_ENV === "production"
				}; SameSite=Strict; Max-Age=0`, // Delete the cookie
			},
		});
	}
}
