import AskQuestionForm from "@/components/page-ask-question/form";
import LoaderUI from "@/components/ui-custom/loader";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default function Page() {
	const sessionToken = cookies().get("session-token")!.value;
	const { uid } = JSON.parse(sessionToken);
	return (
		<Suspense fallback={<LoaderUI />}>
			<AskQuestionForm uid={uid} />
		</Suspense>
	);
}
