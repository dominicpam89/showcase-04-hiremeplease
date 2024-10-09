import {
	FormLoginType,
	FormRegisterType,
} from "@/lib/models/frontend/auth.model";

export type TypeLoginFormState = {
	message: string;
	error: boolean;
	data: FormLoginType;
};

export type TypeRegisterFormState = {
	message: string;
	error: boolean;
	data: FormRegisterType;
};
