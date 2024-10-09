"use client";
import { useMutation } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import {
	signinWithEmailPassword,
	signupWithEmailPassword,
	getLimitedUserInfo,
	LimitedUserInfoType,
	sessionUpdate,
} from "@/lib/services/auth.service";
import { ContextAuthType } from "@/lib/types/auth.context.type";
import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

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

	const [userState, setUserState] = useState<LimitedUserInfoType | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				await sessionUpdate(user);
				setUserState(getLimitedUserInfo(user));
			} else {
				await sessionUpdate(null);
				setUserState(null);
			}
		});
		return () => unsubscribe(); // Clean up
	}, [auth]);

	return (
		<ContextAuth.Provider value={{ signinState, signupState, userState }}>
			{children}
		</ContextAuth.Provider>
	);
}
