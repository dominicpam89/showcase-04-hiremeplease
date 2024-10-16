"use client";
import {
	formRegisterSchema,
	type FormRegisterType,
} from "@/lib/models/frontend/auth.model";
import InputGroup from "@/components/ui-custom/input-group";
import InputFieldPassword from "@/components/ui-custom/input-field-password";
import InputField from "@/components/ui-custom/input-field";
import { AtSignIcon, VenetianMaskIcon, ShieldCheckIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import AuthProvidersUI from "./providers";
import AuthSwitchButton from "./switch";
import { useFormState } from "react-dom";
import { actionRegister } from "@/lib/actions/register.action";
import FormErrorUI from "./form-error";
import { TypeFormstate } from "@/lib/types/form.type";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FormRegisterUI() {
	const [formState, formAction] = useFormState(actionRegister, {
		message: "",
		status: "idle",
	} as TypeFormstate);

	const hookForm = useForm<FormRegisterType>({
		defaultValues: {
			firstName: "First",
			lastName: "Last",
			email: "mockemail@email.com",
			password: "Password12345",
			confirmationPassword: "Password12345",
		},
		resolver: zodResolver(formRegisterSchema),
		mode: "onBlur",
		reValidateMode: "onChange",
	});

	const router = useRouter();
	useEffect(() => {
		if (formState.status == "success")
			router.push("/auth/success?type=register");
	}, [formState]);

	const onValid: SubmitHandler<FormRegisterType> = (data) => {
		const formData = new FormData();
		formData.append("email", data.email);
		formData.append("firstName", data.firstName || "");
		formData.append("lastName", data.lastName || "");
		formData.append("password", data.password);
		formData.append("confirmationPassword", data.confirmationPassword);
		formAction(formData);
	};

	const { isSubmitting, isValidating } = hookForm.formState;

	return (
		<FormProvider {...hookForm}>
			<form
				name="form-register"
				className="w-full flex flex-col gap-4"
				onSubmit={hookForm.handleSubmit(onValid)}
			>
				{formState.status === "error" && (
					<FormErrorUI message={formState.message} />
				)}
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
				<Button type="submit" disabled={isSubmitting || isValidating}>
					Register with Email
				</Button>
				<AuthProvidersUI disabled={isSubmitting || isValidating} />
				<AuthSwitchButton
					disabled={isSubmitting || isValidating}
					link="/login"
				>
					Already have account?
				</AuthSwitchButton>
			</form>
		</FormProvider>
	);
}
