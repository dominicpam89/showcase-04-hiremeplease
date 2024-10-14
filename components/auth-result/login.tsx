"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AuthResultLogin() {
	const router = useRouter();
	const [countdown, setCountDown] = useState(300);
	useEffect(() => {
		if (countdown == 0) router.push("/");
		else {
			const timer = setTimeout(() => setCountDown(countdown - 1), 1000);
			return () => clearTimeout(timer);
		}
	}, [countdown]);
	return (
		<Alert
			aria-label="auth-login-result"
			className="p-12 space-y-2 border-primary/50 dark:border-primary-foreground/50 text-primary dark:text-primary-foreground"
		>
			<AlertTitle className="font-extrabold uppercase text-xl">
				Successfully logged in
			</AlertTitle>
			<AlertDescription>
				You are going to be redirected in {countdown}. Or if you're in
				hurry, you can click here{" "}
				<Link
					href="/"
					className="underline underline-offset-4 transition-all ease-in-out font-normal hover:font-bold"
				>
					redirect to homepage
				</Link>
			</AlertDescription>
		</Alert>
	);
}
