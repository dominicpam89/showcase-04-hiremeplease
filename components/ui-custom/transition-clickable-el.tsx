import { ContextLoaderUI } from "@/lib/context/loader.context";
import { HTMLAttributes, useContext } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
	readonly children: React.ReactNode;
	onClick?: any;
}
export default function TransAnyUI({
	children,
	onClick = () => {},
	...props
}: Props) {
	const { toggleOn } = useContext(ContextLoaderUI);
	const onElementClick = async (e: any) => {
		toggleOn();
		onClick();
	};
	return (
		<span {...props} onClick={onElementClick}>
			{children}
		</span>
	);
}
