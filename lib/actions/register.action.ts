"use server";
import {
	formRegisterSchema,
	FormRegisterType,
} from "@/lib/models/frontend/auth.model";

export async function actionRegister(prevState: unknown, data: FormData) {
	prevState;
	const formObject = Object.fromEntries(data.entries()) as FormRegisterType;
	const validate = formRegisterSchema.safeParse(formObject);
	if (!validate.success) {
		return {
			status: "error",
			message: "Validation failed",
		};
	} else {
		return {
			status: "success",
			message: "Successfully submitted your registration form!",
		};
	}
}
