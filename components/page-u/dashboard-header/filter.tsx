"use client"
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select"
import { useSearchParams } from "next/navigation"

interface Props {
     selectText: string
     items: TypeFilterSortItems[]
     paramsKey: "filterBy" | "sortBy"
}

export default function DashboardHeaderFilter({
     items,
     selectText,
}: Props) {
     const searchParams = useSearchParams()
     return (
          <Select>
               <SelectTrigger className="w-full">
                    <SelectValue placeholder={selectText} />
               </SelectTrigger>
               <SelectContent className="text-xs p-2">
                    {items.map((item) => {
                         return (
                              <SelectItem
                                   key={item.val}
                                   value={item.val}
                              >
                                   {item.text}
                              </SelectItem>
                         )
                    })}
               </SelectContent>
          </Select>
     )
}
