import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<main
			aria-label="layout-auth"
			className="relative w-full min-h-screen flex justify-center items-center"
		>
			{children}
		</main>
	);
}
