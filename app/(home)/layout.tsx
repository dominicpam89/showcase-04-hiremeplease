import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<main
			aria-label="layout-homepage"
			className="p-6 md:p-12 lg:p-18 xl:p-24"
		>
			{children}
		</main>
	);
}
