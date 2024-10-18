"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useContextAuth } from "@/lib/hooks/useContextAuth";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavbarDesktopLogoutUI() {
	const { signoutState } = useContextAuth();
	const router = useRouter();
	return (
		<DropdownMenuItem
			onClick={() => {
				signoutState.mutate();
				router.replace("/login");
			}}
			className="flex gap-2"
		>
			<LogOutIcon size={12} />
			<span>Logout</span>
		</DropdownMenuItem>
	);
}
