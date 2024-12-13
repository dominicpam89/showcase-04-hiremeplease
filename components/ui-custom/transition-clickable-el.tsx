import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
	readonly children: React.ReactNode;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onClick?: any;
}
export default function TransAnyUI({
	children,
	onClick = () => {},
	...props
}: Props) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
	const onElementClick = async (e: any) => {
		onClick();
	};
	return (
		<span {...props} onClick={onElementClick}>
			{children}
		</span>
	);
}
