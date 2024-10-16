"use server";
import {
	formLoginSchema,
	FormLoginType,
} from "@/lib/models/frontend/auth.model";
import { TypeFormstate } from "@/lib/types/form.type";

export async function actionLogin(
	prevState: TypeFormstate,
	data: FormData
): Promise<TypeFormstate> {
	prevState;
	const formObject = Object.fromEntries(data.entries()) as FormLoginType;
	const validate = formLoginSchema.safeParse(formObject);
	if (!validate.success) {
		return {
			message: "Form data is not valid! Fail to submit",
			status: "error",
		};
	} else {
		return {
			message: "Successfully submitted",
			status: "success",
		};
	}
}
