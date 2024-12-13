import { getTopAnswersByQuestionId } from "@/lib/services/answer.service"
import DashboardContentAnswer from "./dashboard-content-answer"
import { Suspense } from "react"

interface Props {
     questionId: string
}
export default async function TopAnswers({
     questionId,
}: Props) {
     const answers = await getTopAnswersByQuestionId(
          2,
          questionId
     )
     return (
          <div
               aria-label="top-two-answers-container"
               className="space-y-4"
          >
               <Suspense fallback={<p>Loading...</p>}>
                    {answers.map((answer) => (
                         <DashboardContentAnswer
                              key={answer.id}
                              answer={answer}
                         />
                    ))}
               </Suspense>
          </div>
     )
}
