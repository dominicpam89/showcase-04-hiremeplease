"use client";
import { createContext } from "react";
import {
	useContextMockProps,
	UseContextMockProps,
} from "@/lib/hooks/useContextAuth.mock";

export const ContextAuthMock = createContext<UseContextMockProps | null>(null);

interface Props {
	readonly children: React.ReactNode;
}
export default function ContextAuthMockProvider({ children }: Props) {
	const props = useContextMockProps();
	return (
		<ContextAuthMock.Provider value={{ ...props }}>
			{children}
		</ContextAuthMock.Provider>
	);
}
