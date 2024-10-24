"use client";

import { ContextLoaderUI } from "@/lib/context/loader.context";
import { delayUtil } from "@/lib/utils";
import { useContext, useEffect } from "react";

interface Props {
	readonly children: React.ReactNode;
}
export default function Template({ children }: Props) {
	const { toggleOff, visible } = useContext(ContextLoaderUI);
	useEffect(() => {
		const removeLoader = async () => {
			await delayUtil(240);
			toggleOff();
		};
		if (visible) removeLoader();
	}, [visible]);
	return children;
}
