import { PropsWithChildren } from "react";
import NavbarMobileUI from "@/components/ui-custom/navbar-mobile";
import SearchBarUI from "@/components/ui-custom/search-bar";
import NavbarDesktopUI from "@/components/ui-custom/navbar-desktop";
import { cn } from "@/lib/utils";
import NavlistDesktop from "@/components/ui-custom/navlist-desktop";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<NavbarMobileUI />
			<div
				aria-label="layout-main-client"
				className="relative w-full min-h-screen flex"
			>
				<NavlistDesktop />
				<div aria-label="main-content" className="w-full">
					<div
						aria-label="nav-desktop-container"
						className={cn(
							"max-md:hidden",
							"py-3 px-6 flex gap-4 justify-between"
						)}
					>
						<SearchBarUI />
						<NavbarDesktopUI />
					</div>
					<main className="px-8 py-4">{children}</main>
				</div>
			</div>
			<footer></footer>
		</>
	);
}
