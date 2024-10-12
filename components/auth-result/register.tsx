"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthResultRegister() {
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
				Successfully registered your account!
			</AlertTitle>
			<AlertDescription>
				You haven&apos;t validate your email.{" "}
				<Link
					href="/"
					className="underline underline-offset-4 transition-all ease-in-out font-normal hover:font-bold"
				>
					Click here
				</Link>{" "}
				to validate!
			</AlertDescription>
		</Alert>
	);
}
