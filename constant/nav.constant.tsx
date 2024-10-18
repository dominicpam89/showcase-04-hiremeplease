import { AtomIcon, AppleIcon } from "lucide-react";

type Size = "sm" | "md" | "lg";
export const getNavList: (iconSize: Size) => TypeNavItem[] = (
	iconSize = "sm"
) => {
	const iconClass =
		iconSize == "sm" ? "size-4" : iconSize == "md" ? "size-5" : "size-6";
	return [
		{
			link: "/ask-questions",
			text: "Ask",
			icon: <AtomIcon className={iconClass} />,
		},
		{
			link: "/client-dummy",
			text: "DummyPage",
			icon: <AppleIcon className={iconClass} />,
		},
	];
};
