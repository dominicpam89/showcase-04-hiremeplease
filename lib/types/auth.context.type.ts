import { UseMutationResult } from "@tanstack/react-query";
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
	currentUser: User | null;
};
