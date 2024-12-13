"use client"
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select"
import {
     usePathname,
     useRouter,
     useSearchParams,
} from "next/navigation"
import { useState } from "react"

interface Props {
     selectText: string
     items: TypeFilterSortItems[]
     paramsKey: "filter" | "sortBy"
}

export default function DashboardHeaderFilter({
     items,
     selectText,
     paramsKey,
}: Props) {
     const router = useRouter()
     const path = usePathname()
     const getParams = useSearchParams()
     const initialSelectValue = getParams.get(paramsKey)!
     const [selected, setSelected] = useState(
          initialSelectValue
     )
     const onValueChange = (val: string) => {
          setSelected(val)
          const [filterVal, sortByVal] = getParams
               .toString()
               .split("&")
          if (paramsKey == "filter") {
               console.log("filter is changed")
               router.push(
                    `${path}?filter=${val}&${sortByVal}`
               )
          }
          if (paramsKey == "sortBy") {
               console.log("sortBy is changed")
               router.push(
                    `${path}?${filterVal}&sortBy=${val}`
               )
          }
     }
     return (
          <Select
               defaultValue={selected}
               onValueChange={onValueChange}
               value={selected}
          >
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
