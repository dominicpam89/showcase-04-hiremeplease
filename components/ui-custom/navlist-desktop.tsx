import { getNavList } from "@/constant/nav.constant";
import { cn } from "@/lib/utils";
import NavlistItemUI from "./navlist-item";

export default function NavlistDesktop() {
	const navlist = getNavList("md");
	return (
		<nav
			aria-label="navlist-desktop"
			className={cn(
				"max-md:hidden",
				"w-3/12 p-8",
				"shadow-md shadow-primary/10 dark:shadow-primary-foreground/10"
			)}
		>
			<ul aria-label="list" className="flex flex-col gap-5">
				{navlist.map((item) => (
					<NavlistItemUI key={item.link} item={item} />
				))}
			</ul>
		</nav>
	);
}
