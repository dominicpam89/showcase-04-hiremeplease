import { getQuestions } from "@/lib/services/question.service";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import DashboardContentAnswers from "./dashboard-content-answers";
import DashboardContentTags from "./dashboard-content-tags";

export default async function DashboardContent() {
	const questions = await getQuestions();
	return (
		<div aria-label="dashboard-content" className="mt-8 flex flex-col gap-2">
			{questions.map((question) => {
				return (
					<Card key={question.id}>
						<CardHeader>
							<CardTitle className="font-primary text-lg font-bold">
								{question.question}
							</CardTitle>
							<CardDescription>
								asked by: user's fullname
							</CardDescription>
							<DashboardContentTags tags={question.tags} />
						</CardHeader>
						<CardContent>
							<DashboardContentAnswers answerIds={question.answerIds} />
						</CardContent>
						<CardFooter>
							<p>Card Footer</p>
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
}
