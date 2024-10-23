import { getQuestions } from "@/lib/services/question.service";
import { Suspense } from "react";
import Question from "./dashboard-content-question";

export default async function DashboardContent() {
	const questions = await getQuestions();
	return (
		<div aria-label="dashboard-content" className="mt-8 flex flex-col gap-5">
			<Suspense fallback={<p>Loading...</p>}>
				{questions.map((question) => (
					<Question key={question.id} question={question} />
				))}
			</Suspense>
		</div>
	);
}
