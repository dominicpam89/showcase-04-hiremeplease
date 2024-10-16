"use server";
import {
	formRegisterSchema,
	FormRegisterType,
} from "@/lib/models/frontend/auth.model";
import { registerWithPassword } from "@/lib/services/auth.service";
import { TypeFormstate } from "@/lib/types/form.type";

export async function actionRegister(
	prevState: TypeFormstate,
	data: FormData
): Promise<TypeFormstate> {
	prevState;
	const formObject = Object.fromEntries(data.entries()) as FormRegisterType;
	const validate = formRegisterSchema.safeParse(formObject);
	if (!validate.success) {
		return {
			message: "Validation failed",
			status: "error",
		};
	} else {
		const { confirmationPassword, ...tobeRegistered } = formObject;
		try {
			await registerWithPassword(tobeRegistered);
			return {
				message: "Successfully submitted your registration form!",
				status: "success",
			};
		} catch (error) {
			return {
				message: (error as Error).message,
				status: "error",
			};
		}
	}
}
