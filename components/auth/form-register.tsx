"use client";
import {
	formRegisterSchema,
	type FormRegisterType,
} from "@/lib/models/frontend/auth.model";
import { AtSignIcon, VenetianMaskIcon, ShieldCheckIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import InputField from "@/components/ui-custom/input-field";
import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui-custom/input-group";
import InputFieldPassword from "@/components/ui-custom/input-field-password";
import { useState } from "react";
import { TypeRegisterFormState } from "@/lib/types/form.type";
import { actionRegister } from "@/lib/actions/register.action";

export default function FormRegisterUI() {
	const [formResult, setFormResult] = useState<TypeRegisterFormState>({
		error: false,
		message: "",
		data: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmationPassword: "",
		},
	});
	const hookForm = useForm<FormRegisterType>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmationPassword: "",
		},
		resolver: zodResolver(formRegisterSchema),
		mode: "onBlur",
		reValidateMode: "onChange",
	});
	const onValid: SubmitHandler<FormRegisterType> = async (data) => {
		const formData = new FormData();
		formData.append("firstName", data.firstName || "");
		formData.append("lastName", data.lastName || "");
		formData.append("email", data.email);
		formData.append("password", data.password);
		formData.append("confirmationPassword", data.confirmationPassword);
		const result = await actionRegister(formResult, formData);
		setFormResult(result);
	};

	console.log(formResult);

	return (
		<FormProvider {...hookForm}>
			<form
				name="form-register"
				className="w-full flex flex-col gap-4"
				onSubmit={hookForm.handleSubmit(onValid)}
			>
				<InputGroup twClasses="max-sm:flex-col">
					<InputField<FormRegisterType>
						name="firstName"
						placeholder="John"
						label="First Name"
					/>
					<InputField<FormRegisterType>
						name="lastName"
						placeholder="Doe"
						label="Last Name"
					/>
				</InputGroup>
				<InputField<FormRegisterType>
					name="email"
					placeholder="johndoe@email.com"
					icon={<AtSignIcon className="w-full h-full" />}
				/>
				<InputFieldPassword<FormRegisterType>
					name="password"
					placeholder="password"
					icon={<VenetianMaskIcon className="w-full h-full" />}
				/>
				<InputFieldPassword<FormRegisterType>
					name="confirmationPassword"
					placeholder="Confirm your password"
					icon={<ShieldCheckIcon className="w-full h-full" />}
				/>
				<Button type="submit">Register with Email</Button>
			</form>
		</FormProvider>
	);
}
