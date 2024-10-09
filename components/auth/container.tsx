import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui-custom/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
	children: React.ReactNode;
	authType: "login" | "register";
}
export default function AuthContainer({ children, authType }: Props) {
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
			<CardContent>{children}</CardContent>
			<CardFooter>
				<Button asChild variant="link">
					<Link href={footerLink.link}>{footerLink.text}</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
