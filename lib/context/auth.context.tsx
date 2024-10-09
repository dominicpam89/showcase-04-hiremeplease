"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import {
	signinWithEmailPassword,
	signupWithEmailPassword,
	getLimitedUserInfo,
	LimitedUserInfoType,
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

	const userState = useQuery({
		queryKey: ["auth"],
		queryFn: () =>
			new Promise<LimitedUserInfoType | null>((resolve) => {
				onAuthStateChanged(auth, (user) => {
					if (user) resolve(getLimitedUserInfo(user));
					else resolve(null);
				});
			}),
	});

	return (
		<ContextAuth.Provider value={{ signinState, signupState, userState }}>
			{children}
		</ContextAuth.Provider>
	);
}
