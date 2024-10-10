import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
	readonly children: React.ReactNode;
	link: string;
	disabled: boolean;
}
export default function AuthSwitchButton({ children, link, disabled }: Props) {
	const router = useRouter();
	return (
		<Button
			type="button"
			variant="link"
			className="mt-2"
			disabled={disabled}
			onClick={() => router.push(link)}
		>
			{children}
		</Button>
	);
}
