import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import SearchBarUI from "@/components/ui-custom/search-bar"
import { Suspense } from "react"
import {
     dashboardSelectItems,
     dashboardSortItems,
} from "@/constant/page-header-filter.constant"
import DashboardHeaderFilter from "./dashboard-header/filter"

export default function PageHeader() {
     return (
          <div
               aria-label="page-main-header"
               className={cn("w-full flex flex-col gap-4")}
          >
               <div
                    aria-label="header-row-1"
                    className={cn(
                         "w-full flex justify-between"
                    )}
               >
                    <h2
                         aria-label="header-title"
                         className={cn(
                              "w-1/2 font-primary font-extrabold uppercase",
                              "text-lg"
                         )}
                    >
                         Questions
                    </h2>
                    <Button size="sm">Ask Question</Button>
               </div>
               <div
                    aria-label="header-row-2"
                    className={cn(
                         "grid grid-cols-9 gap-2 items-center"
                    )}
               >
                    <div
                         aria-label="search-bar-container"
                         className={cn(
                              "col-span-9",
                              "md:col-span-5"
                         )}
                    >
                         <SearchBarUI
                              key="search-question"
                              inputId="search-question"
                              compLabel="Search Question"
                              placeholder="Input question keyword"
                         />
                    </div>
                    <div
                         aria-label="filter-container"
                         className={cn(
                              "col-span-9",
                              "md:col-span-4",
                              "grid grid-cols-2 gap-2"
                         )}
                    >
                         <Suspense
                              fallback={<p>Loading...</p>}
                         >
                              <DashboardHeaderFilter
                                   key="filter"
                                   paramsKey="filter"
                                   items={
                                        dashboardSelectItems
                                   }
                                   selectText="Filter"
                              />
                              <DashboardHeaderFilter
                                   key="sortBy"
                                   paramsKey="sortBy"
                                   items={
                                        dashboardSortItems
                                   }
                                   selectText="Sort By"
                              />
                         </Suspense>
                    </div>
               </div>
          </div>
     )
}
