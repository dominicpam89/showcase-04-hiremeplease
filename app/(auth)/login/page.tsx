import AuthContainer from "@/components/auth/container";
import FormLoginUI from "@/components/auth/form-login";
import AuthProvidersUI from "@/components/auth/providers";

export default function Page() {
	return (
		<AuthContainer authType="login">
			<FormLoginUI />
			<AuthProvidersUI />
		</AuthContainer>
	);
}
