import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
	const { logged, limitedUserInfo } = await request.json();
	if (logged) {
		try {
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
		cookies().delete("session-token");
	}
}
