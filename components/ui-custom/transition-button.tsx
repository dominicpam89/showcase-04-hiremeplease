import { Button, ButtonProps } from "@/components/ui/button";
import { ContextLoaderUI } from "@/lib/context/loader.context";
import { useContext } from "react";

interface Props extends ButtonProps {
	readonly children: React.ReactNode;
	onClick?: any;
}
export default function TransButtonUI({
	children,
	onClick = () => {},
	...props
}: Props) {
	const { toggleOn } = useContext(ContextLoaderUI);
	const onButtonClick = async (e: any) => {
		e.preventDefault();
		toggleOn();
		onClick();
	};
	return (
		<Button {...props} onClick={onButtonClick}>
			{children}
		</Button>
	);
}
