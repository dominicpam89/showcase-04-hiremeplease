import { Button, ButtonProps } from "@/components/ui/button";
import { ContextLoaderUI } from "@/lib/context/loader.context";
import { delayUtil } from "@/lib/utils";
import { useContext } from "react";

interface Props extends ButtonProps {
	readonly children: React.ReactNode;
	onClick?: any;
	delay?: number;
}
export default function TransButtonUI({
	children,
	onClick = () => {},
	delay = 200,
	...props
}: Props) {
	const { toggleOn, toggleOff } = useContext(ContextLoaderUI);
	const onButtonClick = async (e: any) => {
		e.preventDefault();
		toggleOn();
		onClick();
		await delayUtil(delay);
		toggleOff();
	};
	return (
		<Button {...props} onClick={onButtonClick}>
			{children}
		</Button>
	);
}
