import { getAnswers } from "@/lib/services/answer.service.mock"
import DashboardContentAnswer from "./dashboard-content-answer"

interface Props {
     questionId: string
}
export default async function TopAnswers({
     questionId,
}: Props) {
     const answers = await getAnswers(questionId)
     if (!answers)
          return <div>{"There isn't any answer"}</div>
     return (
          <div
               aria-label="top-two-answers-container"
               className="space-y-4"
          >
               {answers.map((answer) => (
                    <DashboardContentAnswer
                         key={answer.id}
                         answer={answer}
                    />
               ))}
          </div>
     )
}
