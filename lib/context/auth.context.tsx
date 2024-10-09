"use client";
import { useMutation } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import {
	signinWithEmailPassword,
	signupWithEmailPassword,
} from "@/lib/services/auth.service";
import { ContextAuthType } from "@/lib/types/auth.context.type";
import { auth } from "@/firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";

export const ContextAuth = createContext<ContextAuthType | null>(null);

interface Props {
	children: React.ReactNode;
}
export default function ContextAuthProvider({ children }: Props) {
	const signinState = useMutation({
		mutationFn: signinWithEmailPassword,
	});
	const signupState = useMutation({
		mutationFn: signupWithEmailPassword,
	});

	const [currentUser, setCurrentUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});
		return () => {
			unsubscribe();
		};
	}, [auth]);

	return (
		<ContextAuth.Provider value={{ signinState, signupState, currentUser }}>
			{children}
		</ContextAuth.Provider>
	);
}
