import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card"
import CardDescriptionUserSkeleton from "../common/card-description-user.skeleton"
import { Skeleton } from "../ui/skeleton"

export default function TopAnswersSkeleton() {
     return (
          <div
               aria-label="top-two-answers-container"
               className="space-y-4"
          >
               <Card aria-label="card-answer">
                    <CardHeader
                         aria-label="card-answer-header"
                         className="py-2 px-6"
                    >
                         <CardTitle />
                         <CardDescription />
                         <CardDescriptionUserSkeleton />
                    </CardHeader>
                    <CardContent
                         aria-label="card-answer-content"
                         className="pb-4"
                    >
                         <Skeleton className="w-full h-6" />
                    </CardContent>
               </Card>
          </div>
     )
}
