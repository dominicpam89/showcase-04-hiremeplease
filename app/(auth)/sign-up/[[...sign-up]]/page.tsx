import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<>
			<h1 className="heading-1">Sign Up Page</h1>
			<SignUp />
		</>
	);
}
