"use client";
import { createContext } from "react";
import {
	useContextAuthMockProps,
	UseContextAuthMockProps,
} from "@/lib/hooks/useContextAuth.mock";

export const ContextAuthMock = createContext<UseContextAuthMockProps | null>(
	null
);

interface Props {
	readonly children: React.ReactNode;
}
export default function ContextAuthMockProvider({ children }: Props) {
	const props = useContextAuthMockProps();
	return (
		<ContextAuthMock.Provider value={{ ...props }}>
			{children}
		</ContextAuthMock.Provider>
	);
}
