"use server";

import { TypeRegisterFormState } from "@/lib/types/form.type";
import { formRegisterSchema } from "@/lib/models/frontend/auth.model";

export async function actionRegister(
	prevState: TypeRegisterFormState,
	data: FormData
): Promise<TypeRegisterFormState> {
	const formObject = Object.fromEntries(data.entries());
	const validate = formRegisterSchema.safeParse(formObject);
	if (!validate.success) {
		return {
			data: prevState.data,
			error: true,
			message: "Validation failed",
		};
	} else {
		return {
			data: prevState.data,
			error: false,
			message: "Successfully submitted your registration form!",
		};
	}
}
