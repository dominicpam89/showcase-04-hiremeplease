"use client";
import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import {
	loginWithPassword,
	registerWithPassword,
	getLimitedUserInfo,
	LimitedUserInfoType,
	logout,
} from "@/lib/services/auth.service";
import { ContextAuthType } from "@/lib/types/auth.context.type";
import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ContextLoaderUI } from "./loader.context";

export const ContextAuth = createContext<ContextAuthType | null>(null);

interface Props {
	children: React.ReactNode;
}
export default function ContextAuthProvider({ children }: Props) {
	const { toggleOff, toggleOn } = useContext(ContextLoaderUI);
	const router = useRouter();

	const signinState = useMutation({
		mutationFn: loginWithPassword,
		onMutate() {
			toggleOn();
		},
		onSuccess: () => {
			toggleOff();
			router.push("/auth/success?type=login");
		},
	});
	const signupState = useMutation({
		mutationFn: registerWithPassword,
		onMutate: () => {
			toggleOn();
		},
		onSuccess: () => {
			toggleOff();
			router.push("/auth/success?type=register");
		},
	});
	const signoutState = useMutation({
		mutationFn: logout,
		onMutate() {
			toggleOn();
		},
		onSuccess: () => {
			toggleOff();
			router.push("/login");
		},
	});

	const [userState, setUserState] = useState<LimitedUserInfoType | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUserState(getLimitedUserInfo(user));
			} else {
				setUserState(null);
			}
		});
		return () => unsubscribe(); // Clean up
	}, [auth]);

	return (
		<ContextAuth.Provider
			value={{ signinState, signupState, signoutState, userState }}
		>
			{children}
		</ContextAuth.Provider>
	);
}
