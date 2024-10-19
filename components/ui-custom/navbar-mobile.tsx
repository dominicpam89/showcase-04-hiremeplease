"use client";
import { cn } from "@/lib/utils";
import { LogoUIWithLink } from "./logo";
import NavlistMobileUI from "./navlist-mobile";
import { motion } from "framer-motion";

export default function NavbarMobileUI() {
	return (
		<header className="relative">
			<motion.nav
				aria-label="navbar-mobile"
				className={cn(
					"md:hidden",
					"w-full p-4 flex justify-between gap-8 items-center",
					"shadow-sm shadow-primary/10 dark:shadow-primary-foreground/10"
				)}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
			>
				<LogoUIWithLink size="lg" />
				<NavlistMobileUI />
			</motion.nav>
		</header>
	);
}
