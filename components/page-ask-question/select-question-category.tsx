import InputSelect from "@/components/ui-custom/input-select"
import { useCategories } from "@/lib/hooks/useCategories"
import {
     ControllerFieldState,
     ControllerRenderProps,
     FieldValues,
     UseFormStateReturn,
} from "react-hook-form"
import { Skeleton } from "@/components/ui/skeleton"
import { FormLabel } from "@/components/ui/form"

interface Props<T extends FieldValues> {
     field: ControllerRenderProps<T>
     fieldState: ControllerFieldState
     formState: UseFormStateReturn<T>
}

export default function SelectQuestionCategory<
     T extends FieldValues,
>({ field }: Props<T>) {
     const { data, error, isError, isFetching } =
          useCategories()
     if (isFetching) {
          return (
               <div
                    aria-label="loading-categories-data"
                    className="space-y-2"
               >
                    <FormLabel>Category</FormLabel>
                    <Skeleton
                         aria-label="input-skeleton"
                         className="w-full h-8"
                    />
               </div>
          )
     }
     if (isError) {
          return (
               <div aria-label="error-fetching-data">
                    <p className="text-sm text-destructive">
                         {error.message}
                    </p>
               </div>
          )
     }
     return (
          <InputSelect<T, TypeCategory<"fetch">>
               field={field}
               placeholder="Question's category"
               label="Category"
               items={data!}
          />
     )
}
