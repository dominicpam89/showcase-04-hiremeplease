import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
} from "@/components/ui/card"
import DashboardContentQuestionCategory from "./dashboard-content-question-category"
import CardDescriptionUser from "@/components/common/card-description-user"
import { cn } from "@/lib/utils"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import CardDescriptionUserSkeleton from "@/components/common/card-description-user.skeleton"
import sanitize from "sanitize-html"

const defaultSanitize = (str: string) => {
     return sanitize(str, {
          allowedTags: sanitize.defaults.allowedTags, // Only headings, paragraphs, and images
          allowedAttributes: {
               ol: ["style"],
               img: ["src", "alt"], // Allow only 'src' and 'alt' on <img>
          },
          allowedSchemes: ["http", "https"], // Allow only safe URL schemes for images})
     })
}

interface Props {
     question: TypeQuestion<"fetch">
}
export default function Question({ question }: Props) {
     const sanitizedQuestion = defaultSanitize(
          question.question
     )
     const sanitizedDetail = question.detail
          ? defaultSanitize(question.detail)
          : null
     return (
          <Card
               key={question.id}
               aria-label="question-card"
               className={cn("lg:py-8 lg:px-6")}
          >
               <CardHeader
                    aria-label="question-card-header"
                    className="space-y-1"
               >
                    <div
                         aria-label="question-card-title"
                         className="font-primary text-lg font-bold"
                         dangerouslySetInnerHTML={{
                              __html: sanitizedQuestion.toString(),
                         }}
                    />
                    <Suspense
                         fallback={
                              <CardDescriptionUserSkeleton />
                         }
                         key="user-suspense"
                    >
                         <CardDescription aria-label="question-card-description">
                              <CardDescriptionUser
                                   uid={question.uid}
                              />
                         </CardDescription>
                    </Suspense>
                    <Suspense
                         fallback={
                              <Skeleton className="w-3/12 h-6" />
                         }
                    >
                         <DashboardContentQuestionCategory
                              categoryId={
                                   question.categoryId
                              }
                         />
                    </Suspense>
               </CardHeader>
               {sanitizedDetail && (
                    <CardContent
                         aria-label="question-card-content"
                         className="p-6 pt-0 text-sm"
                    >
                         <div
                              aria-label="question-description"
                              dangerouslySetInnerHTML={{
                                   __html: sanitizedDetail.toString(),
                              }}
                         />
                    </CardContent>
               )}
          </Card>
     )
}
