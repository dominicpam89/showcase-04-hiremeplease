import { auth } from "@/firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	User,
	updateProfile,
	signOut,
} from "firebase/auth";

export async function sessionUpdate(user: User | null) {
	if (user) {
		const token = await user.getIdToken(true);
		try {
			await fetch("http://localhost:3000/api/auth/session", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ token }),
			});
		} catch (error) {
			console.log("couldn't update cookies", error);
			throw error;
		}
	} else {
		throw new Error("Couldn't update token");
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
		const { user } = await signInWithEmailAndPassword(auth, email, password);
		await sessionUpdate(user);
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
		await fetch("http://localhost:3000/api/auth/logout");
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export function getLimitedUserInfo(user: User) {
	const { email, emailVerified, displayName, uid, photoURL } = user;
	return { email, emailVerified, displayName, uid, photoURL };
}
export type LimitedUserInfoType = ReturnType<typeof getLimitedUserInfo>;
