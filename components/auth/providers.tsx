"use client";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGoogle } from "react-icons/fa";

interface Props {
	disabled: boolean;
}
export default function AuthProvidersUI({ disabled = false }: Props) {
	const defaultStyle = "bg-inherit text-inherit mr-2";
	const btnStyle = "w-full py-5";
	const loginWithGoogle = () => {};
	const loginWithFacebook = () => {};
	return (
		<div
			aria-label="auth-providers-container"
			className="mt-2 w-full flex gap-3 items-center max-sm:flex-col"
		>
			<Button
				variant="outline"
				className={btnStyle}
				size="lg"
				type="button"
				disabled={disabled}
				onClick={loginWithFacebook}
			>
				<FaFacebook className={defaultStyle} />
				Login with Facebook
			</Button>
			<Button
				variant="outline"
				className={btnStyle}
				size="lg"
				type="button"
				disabled={disabled}
				onClick={loginWithGoogle}
			>
				<FaGoogle className={defaultStyle} />
				Login with Google
			</Button>
		</div>
	);
}
