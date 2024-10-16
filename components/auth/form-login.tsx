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
import AuthProvidersUI from "./providers";
import AuthSwitchButton from "./switch";
import { useFormState } from "react-dom";
import { actionLogin } from "@/lib/actions/login.action";
import { TypeFormstate } from "@/lib/types/form.type";
import FormErrorUI from "./form-error";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function FormLoginUI() {
	const [formState, formAction] = useFormState(actionLogin, {
		message: "",
		status: "idle",
	} as TypeFormstate);
	const formRef = useRef<HTMLFormElement | null>(null);

	const hookForm = useForm<FormLoginType>({
		defaultValues: {
			email: "mockemail@email.com",
			password: "Password12345",
		},
		resolver: zodResolver(formLoginSchema),
		mode: "onBlur",
		reValidateMode: "onChange",
	});

	const onValid: SubmitHandler<FormLoginType> = (data) => {
		const formData = new FormData();
		formData.append("email", data.email);
		formData.append("password", data.password);
		formAction(formData);
	};

	const router = useRouter();
	useEffect(() => {
		if (formState.status == "success")
			router.push("/auth/success?type=login");
	}, [formState]);

	const {
		formState: { isSubmitting, isValidating },
	} = hookForm;

	return (
		<FormProvider {...hookForm}>
			<form
				ref={formRef}
				name="form-login"
				className="w-full flex flex-col gap-4"
				onSubmit={hookForm.handleSubmit(onValid)}
			>
				{formState.status === "error" && (
					<FormErrorUI message={formState.message} />
				)}
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
				<Button type="submit" disabled={isSubmitting || isValidating}>
					Login with Email
				</Button>
				<AuthProvidersUI disabled={isSubmitting || isValidating} />
				<AuthSwitchButton
					disabled={isSubmitting || isValidating}
					link="/register"
				>
					Don&apos;t have account?
				</AuthSwitchButton>
			</form>
		</FormProvider>
	);
}
