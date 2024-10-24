"use client";
import { createContext, useState } from "react";

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
	const toggleOn = () => setVisible(true);
	const toggleOff = () => setVisible(false);
	return (
		<ContextLoaderUI.Provider value={{ visible, toggleOn, toggleOff }}>
			{children}
		</ContextLoaderUI.Provider>
	);
}
