import { auth } from "@/firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	User,
	updateProfile,
} from "firebase/auth";

export async function sessionUpdate(user: User | null) {
	if (user) {
		const limitedUserInfo: LimitedUserInfoType = getLimitedUserInfo(user);
		const token = user.getIdToken(true);
		await fetch("/api/auth/session", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				token,
				limitedUserInfo,
			}),
		});
	} else {
		await fetch("/api/auth/session", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				token: null,
			}),
		});
	}
}

export async function signinWithEmailPassword({
	email,
	password,
}: {
	email: string;
	password: string;
}) {
	try {
		const user = await signInWithEmailAndPassword(auth, email, password);
		return user;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function signupWithEmailPassword({
	email,
	password,
	firstName = "",
	lastName = "",
}: {
	email: string;
	password: string;
	firstName?: string;
	lastName?: string;
}) {
	try {
		const { user } = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		await updateProfile(user, {
			displayName: firstName + " " + lastName,
		});
		return user;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function logout() {
	try {
		await signOut(auth);

		// Inform the server to clear the session or cookie
		await fetch("/api/auth", {
			method: "POST",
		});

		return { message: "logged out successfully" };
	} catch (error) {
		console.error("Error logging out:", error);
		throw error;
	}
}

export function getLimitedUserInfo(user: User) {
	const { email, emailVerified, displayName, uid, photoURL } = user;
	return { email, emailVerified, displayName, uid, photoURL };
}
export type LimitedUserInfoType = ReturnType<typeof getLimitedUserInfo>;
