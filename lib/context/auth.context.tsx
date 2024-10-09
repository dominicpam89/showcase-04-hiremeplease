"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useEffect } from "react";
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

	useEffect(() => {
		const currentUser = userState.data;
		if (!currentUser) {
			return;
		}

		const setupToken = async () => {
			const user = auth.currentUser;
			if (user) {
				try {
					const token = await user.getIdToken();

					// Send the user token to your server
					await fetch("/api/auth", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ token }),
					});
				} catch (error) {
					console.error("Failed to send token to server:", error);
				}
			}
		};

		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				await setupToken(); // Handle when user signs in
			} else {
				// Handle when user signs out or session expires
				await fetch("/api/auth", {
					method: "POST",
				});
			}
		});

		return () => unsubscribe(); // Clean up the subscription on component unmount
	}, [userState]);

	return (
		<ContextAuth.Provider value={{ signinState, signupState, userState }}>
			{children}
		</ContextAuth.Provider>
	);
}
