import { UseMutationResult } from "@tanstack/react-query";
import { User, UserCredential } from "firebase/auth";
import { LimitedUserInfoType } from "../services/auth.service";

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
			firstName?: string;
			lastName?: string;
		},
		unknown
	>;
	userState: LimitedUserInfoType | null;
};
