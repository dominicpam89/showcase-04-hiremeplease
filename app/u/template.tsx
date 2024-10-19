"use client";
import { PropsWithChildren } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import LoaderUI from "@/components/ui-custom/loader";

export default function Template({ children }: PropsWithChildren) {
	const pathname = usePathname();
	return (
		<AnimatePresence>
			<LoaderUI key={pathname} />
			{children}
		</AnimatePresence>
	);
}
