import Link, { LinkProps } from "next/link";
import { ContextLoaderUI } from "@/lib/context/loader.context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { delayUtil } from "@/lib/utils";

interface Props extends LinkProps {
	readonly children: React.ReactNode;
	className: string;
	delay?: number;
}
export default function TransLink({ children, delay = 200, ...props }: Props) {
	const { toggleOn, toggleOff } = useContext(ContextLoaderUI);
	const router = useRouter();
	const onLinkClick = async (e: any) => {
		e.preventDefault();
		toggleOn();
		router.push(props.href.toString());
		await delayUtil(delay);
		toggleOff();
	};
	return (
		<Link {...props} onClick={onLinkClick}>
			{children}
		</Link>
	);
}
