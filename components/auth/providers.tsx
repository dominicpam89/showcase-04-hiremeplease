"use client";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function AuthProvidersUI() {
	const defaultStyle = "bg-inherit text-inherit mr-2";
	const btnStyle = "w-full py-5";
	const loginWithGoogle = () => {};
	const loginWithFacebook = () => {};
	return (
		<div
			aria-label="auth-providers-container"
			className="mt-4 w-full flex gap-3 items-center max-sm:flex-col"
		>
			<Button
				variant="outline"
				className={btnStyle}
				size="lg"
				onClick={loginWithFacebook}
			>
				<FaFacebook className={defaultStyle} />
				Login with Facebook
			</Button>
			<Button
				variant="outline"
				className={btnStyle}
				size="lg"
				onClick={loginWithGoogle}
			>
				<FaGoogle className={defaultStyle} />
				Login with Google
			</Button>
		</div>
	);
}
