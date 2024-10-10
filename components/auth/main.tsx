import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui-custom/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FormRegisterUI from "./form-register";
import FormLoginUI from "./form-login";

interface Props {
	authType: "login" | "register";
}
export default function AuthMainForm({ authType }: Props) {
	const title = authType === "login" ? "Login" : "Register";
	const description =
		authType === "register" ? "Register description" : "Login description";
	const footerLink =
		authType === "login"
			? { link: "/register", text: "Don't have account? Register here" }
			: { link: "/login", text: "Already have account? Login here" };
	return (
		<Card className="w-full max-w-xl mx-auto p-4 md:p-8">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				{authType == "register" && <FormRegisterUI />}
				{authType == "login" && <FormLoginUI />}
			</CardContent>
		</Card>
	);
}
