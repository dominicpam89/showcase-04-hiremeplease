import { ContextLoaderUI } from "@/lib/context/loader.context";
import { delayUtil } from "@/lib/utils";
import { HTMLAttributes, useContext } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
	readonly children: React.ReactNode;
	onClick?: any;
	delay?: number;
}
export default function TransAnyUI({
	children,
	onClick = () => {},
	delay = 200,
	...props
}: Props) {
	const { toggleOn, toggleOff } = useContext(ContextLoaderUI);
	const onElementClick = async (e: any) => {
		toggleOn();
		onClick();
		await delayUtil(delay);
		toggleOff();
	};
	return (
		<span {...props} onClick={onElementClick}>
			{children}
		</span>
	);
}
