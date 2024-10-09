import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { User, UserCredential } from "firebase/auth";

export type ContextAuthType = {
	signinState: UseMutationResult<
		UserCredential,
		Error,
		{
			email: string;
			password: string;
		},
		unknown
	>;
	signupState: UseMutationResult<
		User,
		Error,
		{
			email: string;
			password: string;
		},
		unknown
	>;
	userState: UseQueryResult<
		{
			email: string | null;
			emailVerified: boolean;
			displayName: string | null;
			uid: string;
			photoURL: string | null;
		} | null,
		Error
	>;
};
