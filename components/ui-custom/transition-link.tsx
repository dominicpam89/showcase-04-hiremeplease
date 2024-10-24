import Link, { LinkProps } from "next/link";
import { ContextLoaderUI } from "@/lib/context/loader.context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

interface Props extends LinkProps {
	readonly children: React.ReactNode;
	className: string;
}
export default function TransLink({ children, ...props }: Props) {
	const { toggleOn } = useContext(ContextLoaderUI);
	const router = useRouter();
	const onLinkClick = async (e: any) => {
		e.preventDefault();
		toggleOn();
		router.push(props.href.toString());
	};
	return (
		<Link {...props} onClick={onLinkClick}>
			{children}
		</Link>
	);
}
