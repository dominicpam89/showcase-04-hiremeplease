import { LogoUIWithLink } from "./logo";
import NavbarMobileUI from "./navbar-mobile";
import NavbarDesktopUI from "./navbar-desktop";

export default function NavbarUI() {
	return (
		<nav className="p-4 flex justify-between items-center shadow-sm">
			<LogoUIWithLink size="lg" />
			<NavbarDesktopUI />
			<NavbarMobileUI />
		</nav>
	);
}
