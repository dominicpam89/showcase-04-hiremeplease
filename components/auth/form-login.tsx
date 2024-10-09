"use client";
import {
	formLoginSchema,
	type FormLoginType,
} from "@/lib/models/frontend/auth.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import InputField from "@/components/ui-custom/input-field";
import InputFieldPassword from "@/components/ui-custom/input-field-password";
import { AtSignIcon, VenetianMaskIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { actionLogin } from "@/lib/actions/login.action";
import { useState } from "react";
import { TypeLoginFormState } from "@/lib/types/form.type";

export default function FormLoginUI() {
	const [formResult, setFormResult] = useState<TypeLoginFormState>({
		error: false,
		message: "",
		data: {
			email: "",
			password: "",
		},
	});
	const hookForm = useForm<FormLoginType>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(formLoginSchema),
		mode: "onBlur",
		reValidateMode: "onChange",
	});

	const onValid: SubmitHandler<FormLoginType> = async (data) => {
		const formData = new FormData();
		formData.append("email", data.email);
		formData.append("password", data.password);
		const result = await actionLogin(formResult, formData);
		setFormResult(result);
	};

	return (
		<FormProvider {...hookForm}>
			<form
				name="form-login"
				className="w-full flex flex-col gap-4"
				onSubmit={hookForm.handleSubmit(onValid)}
			>
				<InputField<FormLoginType>
					name="email"
					placeholder="johndoe@email.com"
					icon={<AtSignIcon className="w-full h-full" />}
				/>
				<InputFieldPassword<FormLoginType>
					name="password"
					placeholder="password"
					icon={<VenetianMaskIcon className="w-full h-full" />}
				/>
				<Button type="submit">Login with Email</Button>
			</form>
		</FormProvider>
	);
}
