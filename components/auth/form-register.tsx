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

export default function FormRegisterUI() {
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
		console.log(data);
	};

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
