import AuthContainer from "@/components/auth/container";
import FormRegisterUI from "@/components/auth/form-register";
import AuthProvidersUI from "@/components/auth/providers";

export default function Page() {
	return (
		<AuthContainer authType="register">
			<FormRegisterUI />
			<AuthProvidersUI />
		</AuthContainer>
	);
}
