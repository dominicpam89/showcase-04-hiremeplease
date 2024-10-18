"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	item: TypeNavItem;
	onSelect?: () => void;
}
export default function NavlistItemUI({ item, onSelect = () => {} }: Props) {
	const pathname = usePathname();

	console.log("pathname: ", pathname);
	console.log("item.link : ", item.link);

	let isActive = item.link == pathname;

	if (item.link == "/u" && pathname == "/u") {
		isActive = true;
	}

	return (
		<li
			aria-label="navlist-item"
			key={item.link}
			className={cn(
				"flex items-center gap-2 transform transition-all duration-200 ease-out",
				{ "font-extrabold text-green-800 dark:text-green-200": isActive },
				{
					"hover:opacity-60 hover:scale-x-105": !isActive,
				},
				"text-sm"
			)}
		>
			{item.icon}
			<Link href={item.link} onClick={onSelect}>
				{item.text}
			</Link>
		</li>
	);
}
