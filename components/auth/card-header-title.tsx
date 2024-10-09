import { CardTitle } from "@/components/ui/card";
import ImageUI from "@/components/ui-custom/image";

export default function AuthCardHeaderTitle() {
	return (
		<div
			aria-label="title-container"
			className="flex gap-2 items-center mx-auto my-2"
		>
			<div aria-label="logo-container" className="size-8">
				<ImageUI src="/logo-lg.png" alt="teatac logo" />
			</div>
			<CardTitle className="text-lg uppercase font-extrabold">
				TeaTac
			</CardTitle>
		</div>
	);
}
