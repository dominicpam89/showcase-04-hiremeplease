import ThemeToggle from "@/components/themes/toggle";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<main
			aria-label="layout-auth"
			className="relative w-full min-h-screen flex justify-center items-center"
		>
			<div className="absolute top-[50px] left-[50px]">
				<ThemeToggle />
			</div>
			{children}
		</main>
	);
}
