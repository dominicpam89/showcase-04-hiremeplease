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
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FormErrorUI from "./form-error";
import AuthProvidersUI from "./providers";
import AuthSwitchButton from "./switch";
import { useContextAuth } from "@/lib/hooks/useContextAuth";

export default function FormRegisterUI() {
	const {
		signupState: { mutate, isSuccess, isError, error, isPending },
	} = useContextAuth();
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
	const onValid: SubmitHandler<FormRegisterType> = async (data) => {
		console.log("debug 2: onValid called");
		mutate(data);
	};

	const router = useRouter();

	useEffect(() => {
		if (isSuccess) {
			console.log("debug 3: isSuccess, router push after");
			router.push("/auth/success?type=register");
		}
	}, [isSuccess]);

	return (
		<FormProvider {...hookForm}>
			<form
				name="form-register"
				className="w-full flex flex-col gap-4"
				onSubmit={hookForm.handleSubmit(onValid)}
			>
				{isError && <FormErrorUI message={error.message} />}
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
				<Button type="submit" disabled={isPending}>
					Register with Email
				</Button>
				<AuthProvidersUI disabled={isPending} />
				<AuthSwitchButton disabled={isPending} link="/login">
					Already have account?
				</AuthSwitchButton>
			</form>
		</FormProvider>
	);
}
