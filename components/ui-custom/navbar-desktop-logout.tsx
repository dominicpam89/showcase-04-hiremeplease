"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useContextAuth } from "@/lib/hooks/useContextAuth";
import { LogOutIcon } from "lucide-react";

export default function NavbarDesktopLogoutUI() {
	const { signoutState } = useContextAuth();
	return (
		<DropdownMenuItem
			onClick={() => {
				signoutState.mutate();
			}}
			className="flex gap-2"
		>
			<LogOutIcon size={12} />
			<span>Logout</span>
		</DropdownMenuItem>
	);
}
