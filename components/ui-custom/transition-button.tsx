/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ButtonProps } from "@/components/ui/button";

interface Props extends ButtonProps {
	readonly children: React.ReactNode;
	onClick?: any;
}
export default function TransButtonUI({
	children,
	onClick = () => {},
	...props
}: Props) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onButtonClick = async (e: any) => {
		e.preventDefault();
		onClick();
	};
	return (
		<Button {...props} onClick={onButtonClick}>
			{children}
		</Button>
	);
}
