import LoaderUI from "@/components/ui-custom/loader";
import { Suspense } from "react";

export default function Page() {
	return (
		<Suspense fallback={<LoaderUI />}>
			<h2>Tags Page</h2>
		</Suspense>
	);
}
