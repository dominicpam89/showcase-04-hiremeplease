import { auth } from "@/firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	User,
} from "firebase/auth";

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
}: {
	email: string;
	password: string;
}) {
	try {
		const { user } = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		return user;
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
