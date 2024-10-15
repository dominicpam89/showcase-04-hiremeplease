import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
	const { logged, limitedUserInfo } = await request.json();
	console.log("debug server: (request.json) - ", logged, limitedUserInfo);
	if (logged) {
		try {
			console.log("debug server: if there's logged user");
			const sessionData = JSON.stringify(limitedUserInfo);
			cookies().set("session-token", sessionData, {
				httpOnly: true,
				sameSite: "strict",
				path: "/",
				maxAge: 3 * 60, // Cookie expiration is set to match the token expiration
			});
		} catch (error) {
			cookies().delete("session-token");
		}
	} else {
		console.log("debug server: if there's no logged user");
		cookies().delete("session-token");
	}
}
