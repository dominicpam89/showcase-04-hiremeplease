import DashboardContent from "@/components/page-u/dashboard-content"
import DashboardHeader from "@/components/page-u/dashboard-header"
import {
     questionFilter,
     questionSortBy,
} from "@/constant/page-u-search-params.constant"
import type {
     TQuestionFilter,
     TQuestionSortBy,
} from "@/constant/page-u-search-params.constant"
import { redirect } from "next/navigation"
import { Suspense } from "react"

interface Props {
     searchParams: {
          filter: TQuestionFilter
          sortBy: TQuestionSortBy
     }
}

const isValidValue = <T extends Record<string, string>>(
     val: string,
     obj: T
): val is T[keyof T] => {
     return Object.values(obj).includes(val)
}

const getPathname = (
     filter: TQuestionFilter,
     sortBy: TQuestionSortBy
) => {
     return `/u?filter=${filter}&sortBy=${sortBy}`
}

export default function Page({ searchParams }: Props) {
     const { filter, sortBy } = searchParams

     const invalidFilter = !isValidValue(
          filter,
          questionFilter
     )
     const invalidSortBy = !isValidValue(
          sortBy,
          questionSortBy
     )

     const missingFilter = !filter && sortBy
     const missingSortBy = filter && !sortBy
     const missingParams = !filter && !sortBy
     if (missingFilter && !invalidSortBy) {
          return redirect(getPathname("question", sortBy))
     }
     if (missingFilter && invalidSortBy) {
          return redirect(getPathname("question", "newest"))
     }
     if (!missingFilter && invalidSortBy) {
          return redirect(getPathname(filter, "newest"))
     }
     if (missingSortBy && !invalidFilter) {
          return redirect(getPathname(filter, "newest"))
     }
     if (missingSortBy && invalidFilter) {
          return redirect(getPathname("question", "newest"))
     }
     if (!missingSortBy && invalidFilter) {
          return redirect(getPathname("question", sortBy))
     }
     if (missingParams) {
          return redirect(getPathname("question", "newest"))
     }

     return (
          <>
               <DashboardHeader />
               <Suspense
                    fallback={<p>Loading skeleton...</p>}
               >
                    <DashboardContent />
               </Suspense>
          </>
     )
}
