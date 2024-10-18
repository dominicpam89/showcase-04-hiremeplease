import { UseMutationResult } from "@tanstack/react-query";
import { User, UserCredential } from "firebase/auth";
import { LimitedUserInfoType } from "../services/auth.service";

type MutationData = { success: boolean; mesasge: string };

export type ContextAuthType = {
	signinState: UseMutationResult<
		MutationData,
		Error,
		{
			email: string;
			password: string;
		},
		unknown
	>;
	signupState: UseMutationResult<
		MutationData,
		Error,
		{
			email: string;
			password: string;
			firstName?: string;
			lastName?: string;
		},
		unknown
	>;
	signoutState: UseMutationResult<void, Error, void, unknown>;
	userState: LimitedUserInfoType | null;
};
