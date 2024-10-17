"use server";
import {
	formRegisterSchema,
	FormRegisterType,
} from "@/lib/models/frontend/auth.model";
import { TypeFormstate } from "@/lib/types/form.type";
import { registerWithPassword } from "@/lib/services/auth.service";
import { getAuth } from "firebase-admin/auth";
import { cookies } from "next/headers";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { initAdmin } from "@/firebase-admin.config";

export async function actionRegister(
	prevState: TypeFormstate,
	data: FormData
): Promise<TypeFormstate> {
	prevState;
	const formObject = Object.fromEntries(data.entries()) as FormRegisterType;
	const validate = formRegisterSchema.safeParse(formObject);
	if (!validate.success) {
		return {
			message: "Validation failed",
			status: "error",
		};
	} else {
		try {
			const user = await registerWithPassword(formObject);
			const token = await user.getIdToken(true);
			initAdmin();
			const verifiedToken = await getAuth().verifyIdToken(token);
			const expiresIn = verifiedToken.exp * 1000 - Date.now();
			if (expiresIn <= 0) {
				throw new Error("Token has already expired");
			}
			const sessionCookie = await getAuth().createSessionCookie(token, {
				expiresIn: expiresIn, // transform back to seconds
			});
			const options: Partial<ResponseCookie> = {
				maxAge: expiresIn, // Cookie expiration in seconds
				httpOnly: true, // Prevent access via JS
				secure: false, // Only send over HTTPS in production
				path: "/", // Root path
				sameSite: "strict", // Prevent CSRF
			};
			cookies().set("session-token", sessionCookie, options);
			return {
				message: "Successfully submitted your registration form!",
				status: "success",
			};
		} catch (error) {
			console.error(error);
			cookies().delete("session-token");
			return {
				message: (error as Error).message,
				status: "error",
			};
		}
	}
}
