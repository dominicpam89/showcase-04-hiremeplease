import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card"
import DashboardContentTags from "./dashboard-content-question-tags"
import CardDescriptionUser from "@/components/common/card-description-user"
import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import TopAnswers from "./dashboard-content-answers"
import { Suspense } from "react"
import CardDescriptionUserSkeleton from "@/components/common/card-description-user.skeleton"
import TopAnswersSkeleton from "./dashboard-content-answers.skeleton"

interface Props {
     question: TypeQuestion<"fetch">
}
export default function Question({ question }: Props) {
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
                    <CardTitle
                         aria-label="question-card-title"
                         className="font-primary text-lg font-bold"
                    >
                         {question.question}
                    </CardTitle>
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
                    <DashboardContentTags
                         tags={question.tags}
                    />
               </CardHeader>
               <CardContent
                    aria-label="question-card-content"
                    className="pb-0"
               >
                    <Suspense
                         fallback={<TopAnswersSkeleton />}
                         key="answers-suspense"
                    >
                         <TopAnswers
                              questionId={question.id}
                         />
                    </Suspense>
               </CardContent>
               <CardFooter
                    aria-label="question-card-footer"
                    className="py-4 justify-center"
               >
                    <Button asChild variant="link">
                         <Link
                              href={`/u/questions/${question.id}`}
                              className="text-sm"
                         >
                              Show More
                         </Link>
                    </Button>
               </CardFooter>
          </Card>
     )
}
