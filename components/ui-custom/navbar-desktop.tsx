import { getNavList } from "@/constant/nav.constant";
import NavbarItemUI from "./navbar-item";
import ThemeToggle from "@/components/themes/toggle";

export default function NavbarDesktopUI() {
	const navlist = getNavList("sm");
	return (
		<ul
			aria-label="navlist-desktop"
			className="flex gap-4 text-sm max-sm:hidden"
		>
			{navlist.map((item) => (
				<NavbarItemUI item={item} key={item.link} />
			))}
			<ThemeToggle />
		</ul>
	);
}
