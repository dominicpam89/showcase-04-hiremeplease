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

export default function Page({ searchParams }: Props) {
     const { filter, sortBy } = searchParams

     const missingParams = !filter || !sortBy
     const invalidFilter = !isValidValue(
          filter,
          questionFilter
     )
     const invalidSortBy = !isValidValue(
          sortBy,
          questionSortBy
     )

     if (missingParams || invalidFilter || invalidSortBy) {
          const defaultFilter = questionFilter["question"]
          const defaultSortBy = questionSortBy["newest"]
          return redirect(
               `/u?filter=${defaultFilter}&sortBy=${defaultSortBy}`
          )
     }

     return (
          <>
               <DashboardHeader />
               <DashboardContent />
          </>
     )
}
