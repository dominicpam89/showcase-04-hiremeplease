import { getNavList } from "@/constant/nav.constant";
import { cn } from "@/lib/utils";
import NavlistItemUI from "./navlist-item";
import { LogoUIWithLink } from "./logo";

export default function NavlistDesktop() {
	const navlist = getNavList("md");
	return (
		<nav
			aria-label="navlist-desktop"
			className={cn(
				"max-md:hidden",
				"w-3/12 p-6 flex flex-col gap-8",
				"shadow-md shadow-primary/10 dark:shadow-primary-foreground/10"
			)}
		>
			<div
				aria-label="navlist-desktop-header"
				className="flex flex-col gap-3"
			>
				<div aria-label="header-title" className="flex items-center gap-3">
					<LogoUIWithLink size="lg" />
					<h2 className="font-black text-primary text-xl">Teatac</h2>
				</div>
				<div aria-label="header-content">
					<p className="text-xs text-primary/50 text-justify text-pretty break-all">
						Welcome to TeaTac (Teach and Tackle), ask the real questions
						to teachers for knowledge bombs
					</p>
				</div>
			</div>
			<ul
				aria-label="navlist-desktop-content"
				className="flex flex-col gap-5"
			>
				{navlist.map((item) => (
					<NavlistItemUI key={item.link} item={item} />
				))}
			</ul>
		</nav>
	);
}
