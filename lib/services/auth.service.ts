import { auth } from "@/firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
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
