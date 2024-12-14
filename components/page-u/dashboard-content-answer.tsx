import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card"
import CardDescriptionUser from "@/components/common/card-description-user"
import sanitizeHtml from "sanitize-html"
import { sanitizeHtmlOptions } from "@/lib/helpers/sanitizeHTML.helper"

interface Props {
     answer: TypeAnswer<"fetch">
}
export default function DashboardContentAnswer({
     answer,
}: Props) {
     const sanitizedAnswer = sanitizeHtml(
          answer.answer,
          sanitizeHtmlOptions
     )
     return (
          <Card aria-label="card-answer">
               <CardHeader
                    aria-label="card-answer-header"
                    className="py-2 px-6"
               >
                    <CardTitle aria-label="card-answer-header-title"></CardTitle>
                    <CardDescription aria-label="card-answer-header-description">
                         <CardDescriptionUser
                              uid={answer.uid}
                         />
                    </CardDescription>
               </CardHeader>
               <CardContent
                    aria-label="card-answer-content"
                    className="pb-4"
               >
                    <div
                         className="text-sm"
                         dangerouslySetInnerHTML={{
                              __html: sanitizedAnswer,
                         }}
                    ></div>
               </CardContent>
          </Card>
     )
}
