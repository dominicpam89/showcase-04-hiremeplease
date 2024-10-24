"use client";
import { createContext, useCallback, useMemo, useState } from "react";

interface IntContextLoaderUI {
	visible: boolean;
	toggleOn: () => void;
	toggleOff: () => void;
}
export const ContextLoaderUI = createContext<IntContextLoaderUI>({
	visible: false,
	toggleOn: () => {},
	toggleOff: () => {},
});

interface Props {
	readonly children: React.ReactNode;
}
export default function ContextLoaderUIProvider({ children }: Props) {
	const [visible, setVisible] = useState(false);
	const toggleOn = useCallback(() => setVisible(true), []);
	const toggleOff = useCallback(() => setVisible(false), []);
	const value = useMemo(() => ({ visible, toggleOff, toggleOn }), [visible]);
	return (
		<ContextLoaderUI.Provider value={value}>
			{children}
		</ContextLoaderUI.Provider>
	);
}
