import { PropsWithChildren } from "react";
import NavbarUI from "@/components/ui-custom/navbar";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<header>
				<NavbarUI />
			</header>
			<main
				aria-label="layout-main-client"
				className="p-6 md:p-12 lg:p-18 xl:p-24"
			>
				{children}
			</main>
			<footer></footer>
		</>
	);
}
