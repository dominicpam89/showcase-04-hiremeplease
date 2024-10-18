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
import FormErrorUI from "./form-error";
import { useContextAuth } from "@/lib/hooks/useContextAuth";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FormLoginUI() {
	const { signinState, userState } = useContextAuth();
	const { mutate, isError, error, isPending } = signinState;
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
		mutate(data);
	};

	const router = useRouter();
	useEffect(() => {
		if (userState) router.push("/");
	}, [userState]);

	return (
		<FormProvider {...hookForm}>
			<form
				name="form-login"
				className="w-full flex flex-col gap-4"
				onSubmit={hookForm.handleSubmit(onValid)}
			>
				{isError && <FormErrorUI message={error.message} />}
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
				<Button type="submit" disabled={isPending}>
					Login with Email
				</Button>
				<AuthProvidersUI disabled={isPending} />
				<AuthSwitchButton disabled={isPending} link="/register">
					Don&apos;t have account?
				</AuthSwitchButton>
			</form>
		</FormProvider>
	);
}
