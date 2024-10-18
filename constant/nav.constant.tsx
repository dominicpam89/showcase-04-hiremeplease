import {
	HouseIcon,
	ComponentIcon,
	LibraryBigIcon,
	BriefcaseBusinessIcon,
	UserPenIcon,
	TagsIcon,
	AppleIcon,
} from "lucide-react";

type Size = "sm" | "md" | "lg";
export const getNavList: (iconSize: Size) => TypeNavItem[] = (
	iconSize = "sm"
) => {
	const iconClass =
		iconSize == "sm" ? "size-4" : iconSize == "md" ? "size-5" : "size-6";
	return [
		{
			link: "/u",
			text: "Main Page",
			icon: <HouseIcon className={iconClass} />,
		},
		{
			link: "/u/community",
			text: "Community",
			icon: <ComponentIcon className={iconClass} />,
		},
		{
			link: "/u/collections",
			text: "Collections",
			icon: <LibraryBigIcon className={iconClass} />,
		},
		{
			link: "/u/find-jobs",
			text: "Find Jobs",
			icon: <BriefcaseBusinessIcon className={iconClass} />,
		},
		{
			link: "/u/tags",
			text: "Tags",
			icon: <TagsIcon className={iconClass} />,
		},
		{
			link: "/u/profile",
			text: "Profile",
			icon: <UserPenIcon className={iconClass} />,
		},
		{
			link: "/u/ask-question",
			text: "Ask a question",
			icon: <AppleIcon className={iconClass} />,
		},
	];
};
