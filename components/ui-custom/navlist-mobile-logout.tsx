import { useContextAuth } from "@/lib/hooks/useContextAuth";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NavlistMobileLogout() {
	const { signoutState } = useContextAuth();
	const router = useRouter();
	return (
		<Button
			onClick={() => {
				signoutState.mutate();
				router.replace("/login");
			}}
		>
			<LogOutIcon size={12} />
			Logout
		</Button>
	);
}
