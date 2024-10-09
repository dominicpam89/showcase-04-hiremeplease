interface Props {
	children: React.ReactNode;
	twClasses?: string;
}
export default function InputGroup({ children, twClasses = "" }: Props) {
	return (
		<div
			aria-label="input-group"
			className={`w-full flex gap-3 ${twClasses}`}
		>
			{children}
		</div>
	);
}
