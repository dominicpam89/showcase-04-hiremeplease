"use server";

import { formLoginSchema } from "../models/frontend/auth.model";
import { TypeLoginFormState } from "@/lib/types/form.type";

export async function actionLogin(
	prevState: TypeLoginFormState,
	data: FormData
): Promise<TypeLoginFormState> {
	console.log(prevState);
	const formObject = Object.fromEntries(data.entries());
	const validate = formLoginSchema.safeParse({ ...formObject });
	if (!validate.success) {
		return {
			error: true,
			message: "Form data is not valid! Fail to submit",
			data: prevState.data,
		};
	} else {
		return {
			error: false,
			message: "Successfully submitted",
			data: {
				email: "",
				password: "",
			},
		};
	}
}
