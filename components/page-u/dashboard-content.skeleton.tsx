import { Skeleton } from "@/components/ui/skeleton"
import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function DashboardContentSkeleton() {
     return (
          <Card
               key="question-card"
               aria-label="question-card"
               className={cn("mt-8 lg:py-8 lg:px-6")}
          >
               <CardHeader
                    aria-label="question-card-header"
                    className="space-y-1"
               >
                    <SkeletonTitle />
                    <SkeletonDescription />
                    <div
                         aria-label="tags-container"
                         className="flex items-center gap-1"
                    >
                         {["tag1", "tag2"].map((tag) => (
                              <SkeletonTag
                                   key={tag}
                                   tag={tag}
                              />
                         ))}
                    </div>
               </CardHeader>
               <CardContent
                    aria-label="question-card-content"
                    className="pb-0"
               >
                    <Card aria-label="card-answer">
                         <CardHeader
                              aria-label="card-answer-header"
                              className="py-2 px-6"
                         >
                              <CardTitle />
                              <CardDescription />
                              <SkeletonDescription />
                         </CardHeader>
                         <CardContent
                              aria-label="card-answer-content"
                              className="pb-4"
                         >
                              <Skeleton className="w-full h-24" />
                         </CardContent>
                    </Card>
               </CardContent>
               <CardFooter
                    aria-label="question-card-footer"
                    className="py-4 justify-center"
               >
                    <Skeleton className="w-3/12 h-8" />
               </CardFooter>
          </Card>
     )
}

function SkeletonTitle() {
     return (
          <Skeleton
               aria-label="title-skeleton"
               className="w-3/12 h-8"
          />
     )
}

function SkeletonDescription() {
     return (
          <Skeleton
               aria-label="description-skeleton"
               className="w-6/12 h-6"
          />
     )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SkeletonTag(props: { tag: string }) {
     return (
          <Skeleton
               aria-label="tag-skeleton"
               className="w-16 h-5"
          ></Skeleton>
     )
}
