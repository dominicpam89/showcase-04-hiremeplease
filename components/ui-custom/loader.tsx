"use client";
import sx from "./loader.module.css";
import { useContext } from "react";
import { ContextLoaderUI } from "@/lib/context/loader.context";
import { cn } from "@/lib/utils";

export default function LoaderTestUI() {
	const { visible } = useContext(ContextLoaderUI);
	return (
		<div
			aria-label="page-transition-component"
			className={cn(
				"absolute z-50 inset-0 min-h-screen w-full bg-primary",
				"transition-all duration-150 ease-in-out pointer-events-none",
				{ "opacity-0 -z-[999]": !visible },
				{ "opacity-90 z-[999]": visible }
			)}
		>
			<div
				aria-label="loader-container"
				className="w-full h-full flex justify-center items-center"
			>
				<div aria-label="loading-component" className={sx.loader}></div>
			</div>
		</div>
	);
}
