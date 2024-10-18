"use client";
import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { useContextAuth } from "@/lib/hooks/useContextAuth";

export default function Layout({ children }: PropsWithChildren) {
	const { signoutState, userState } = useContextAuth();
	return (
		<main
			aria-label="layout-homepage"
			className="p-6 md:p-12 lg:p-18 xl:p-24"
		>
			{userState && (
				<Button onClick={() => signoutState.mutate()}>Logout</Button>
			)}
			{children}
		</main>
	);
}
