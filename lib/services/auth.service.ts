import { auth } from "@/firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	User,
	updateProfile,
} from "firebase/auth";

export async function sessionUpdate(user: User | null) {
	console.log("debug: sessionUpdate");
	if (user) {
		console.log("debug: sessionUpdate if user does exist");
		const limitedUserInfo: LimitedUserInfoType = getLimitedUserInfo(user);
		await fetch("/api/auth/session", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				logged: true,
				limitedUserInfo,
			}),
		});
	} else {
		console.log("debug: sessionUpdate if user is null");
		await fetch("/api/auth/session", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				logged: false,
			}),
		});
	}
}

export async function loginWithPassword({
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

export async function registerWithPassword({
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
		console.log("debug: (registerWithPassword) user is created!");

		await updateProfile(user, {
			displayName: firstName + " " + lastName,
		});
		console.log("debug: (registerWithPassword) update profile");

		const logged = await loginWithPassword({ email, password });
		console.log(
			"debug: (registerWithPassword) logging in newly created user"
		);

		return logged.user;
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
