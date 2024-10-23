import { cn } from "@/lib/utils";
import { LogoUIWithLink } from "./logo";
import NavlistMobileUI from "./navlist-mobile";

export default function NavbarMobileUI() {
	return (
		<nav
			aria-label="navbar-mobile"
			className={cn(
				"absolute top-0 left-0",
				"md:hidden",
				"w-full p-4 flex justify-between gap-8 items-center",
				"shadow-sm shadow-primary/10 dark:shadow-primary-foreground/10"
			)}
		>
			<LogoUIWithLink size="lg" />
			<NavlistMobileUI />
		</nav>
	);
}
