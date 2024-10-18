"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	item: TypeNavItem;
	onSelect?: () => void;
}
export default function NavbarItemUI({ item, onSelect = () => {} }: Props) {
	const pathname = usePathname();
	const isActive =
		item.link.includes(pathname) || pathname.startsWith(item.link);
	return (
		<li
			key={item.link}
			className={cn(
				"flex items-center gap-1 transform transition-all duration-200 ease-out",
				{ "font-extrabold text-green-800 dark:text-green-200": isActive },
				{
					"hover:opacity-60 hover:scale-x-105": !isActive,
				}
			)}
		>
			{item.icon}
			<Link href={item.link} onClick={onSelect}>
				{item.text}
			</Link>
		</li>
	);
}
