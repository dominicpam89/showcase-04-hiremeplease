import AuthResultLogin from "@/components/auth-result/login";
import AuthResultRegister from "@/components/auth-result/register";

interface Props {
	searchParams: {
		type: "login" | "register";
	};
}

export default function Page({ searchParams: { type } }: Props) {
	return (
		<div
			aria-label="auth-success-container"
			className="w-full max-w-xl mx-auto"
		>
			{type == "login" && <AuthResultLogin />}
			{type == "register" && <AuthResultRegister />}
		</div>
	);
}
