"use client"
import {
     Select,
     SelectTrigger,
     SelectValue,
     SelectItem,
     SelectContent,
} from "@/components/ui-custom/select"
import { useCategories } from "@/lib/hooks/useCategories"
import {
     ControllerRenderProps,
     FieldValues,
     Path,
} from "react-hook-form"
import {
     FormControl,
     FormItem,
     FormLabel,
     FormMessage,
} from "@/components/ui/form"

interface Props<T extends FieldValues> {
     field: ControllerRenderProps<T, Path<T>>
}
export default function InputSelect<T extends FieldValues>({
     field,
}: Props<T>) {
     const { isError, isFetching, data, error } =
          useCategories()
     if (isError) {
          return (
               <p className="text-destructive text-sm">
                    {error.message}
               </p>
          )
     }
     return (
          <FormItem>
               <FormLabel>Category</FormLabel>
               <Select
                    onValueChange={field.onChange}
                    value={field.value}
               >
                    <FormControl>
                         <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select category for your question" />
                         </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                         {isFetching && !data && (
                              <LoadingCategories />
                         )}
                         {data &&
                              data.map((cat) => (
                                   <SelectItem
                                        key={cat.id}
                                        value={cat.val}
                                   >
                                        {cat.val}
                                   </SelectItem>
                              ))}
                    </SelectContent>
               </Select>
               <FormMessage className="text-xs" />
          </FormItem>
     )
}

function LoadingCategories() {
     return (
          <div
               aria-label="loading-component"
               className="p-4"
          >
               <p className="text-sm">
                    Loading categories...
               </p>
          </div>
     )
}
