import { useContextAuth } from "@/lib/hooks/useContextAuth";
import { LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavlistMobileLogout() {
	const { signoutState } = useContextAuth();
	return (
		<Button
			onClick={() => {
				signoutState.mutate();
			}}
		>
			<LogOutIcon size={12} />
			Logout
		</Button>
	);
}
