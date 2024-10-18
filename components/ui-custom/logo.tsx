import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
	size?: TypeSize;
}

const HOMEPAGE_URL = process.env.NEXT_PUBLIC_HOMEPAGE as string;

export function LogoUI({ size = "md" }: Props) {
	const sizeClass =
		size == "sm" ? "size-5" : size == "md" ? "size-6" : "size-7";
	return (
		<div aria-label="logo-image-container" className={sizeClass}>
			<img src="/logo-sm.png" alt="logo" className="w-full h-full" />
		</div>
	);
}

export function LogoUIWithLink({ size = "md" }: Props) {
	const sizeClass =
		size == "sm" ? "size-5" : size == "md" ? "size-6" : "size-7";
	return (
		<div
			aria-label="logo-image-container"
			className={cn(
				sizeClass,
				"cursor-pointer transform hover:scale-110 transition-all duration-300 ease-out"
			)}
		>
			<Link href={HOMEPAGE_URL}>
				<img src="/logo-sm.png" alt="logo" className="w-full h-full" />
			</Link>
		</div>
	);
}
