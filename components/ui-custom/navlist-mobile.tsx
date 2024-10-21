"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { getNavList } from "@/constant/nav.constant";
import { AlignJustifyIcon } from "lucide-react";
import NavlistItemUI from "./navlist-item";
import { LogoUI } from "./logo";
import { Separator } from "@/components/ui/separator";
import { useCommonToggle } from "@/lib/hooks/useCommonToggle";
import ThemeToggle from "@/components/themes/toggle";
import NavlistMobileLogout from "./navlist-mobile-logout";

export default function NavlistMobileUI() {
	const { open, onOpenChange, toggleClose } = useCommonToggle();
	const navlist = getNavList("sm");
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetTrigger>
				<AlignJustifyIcon
					className="transform scale-100 hover:scale-125 active:scale-95 transition-all duration-200 ease-out"
					size={20}
				/>
			</SheetTrigger>
			<SheetContent aria-label="navlist-mobile" className="px-6 sm:px-12">
				<SheetHeader>
					<SheetTitle className="flex gap-2 justify-center mb-2 items-center">
						<LogoUI />
						TeaTac App
					</SheetTitle>
					<SheetDescription className="text-xs text-justify leading-4">
						Welcome to TeaTac (Teach and Tackle), where students ask the
						real questions and teachers drop the knowledge bombs—sometimes
						with a side of sarcasm!
					</SheetDescription>
					<div className="text-right">
						<ThemeToggle />
					</div>
				</SheetHeader>
				<Separator className="mt-6" />
				<ul
					aria-label="navlist-mobile"
					className="mt-6 flex flex-col gap-5 text-xs"
				>
					{navlist.map((item) => (
						<NavlistItemUI
							item={item}
							key={item.link}
							onSelect={toggleClose}
						/>
					))}
					<NavlistMobileLogout />
				</ul>
			</SheetContent>
		</Sheet>
	);
}
