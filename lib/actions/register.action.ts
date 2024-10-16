"use server";
import {
	formRegisterSchema,
	FormRegisterType,
} from "@/lib/models/frontend/auth.model";
import { TypeFormstate } from "@/lib/types/form.type";
import { registerWithPassword } from "@/lib/services/auth.service";

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
		try {
			await registerWithPassword(formObject);
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
