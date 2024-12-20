"use client"
import { useFormContext } from "react-hook-form"
import InputFieldTextEditor from "@/components/ui-custom/input-field-wysiwyg"
import { TypeAskQuestionSchema } from "@/lib/models/frontend/question.model"
import {
     FormDescription,
     FormLabel,
     FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

export default function InputTextEditor() {
     const { register, setValue, formState, trigger } =
          useFormContext<TypeAskQuestionSchema>()
     const detailError = formState.errors.detail
     const initialValue = ""
     return (
          <div
               aria-label="input-text-editor-container"
               className="flex flex-col gap-3"
          >
               <input
                    aria-label="real-input"
                    className="hidden"
                    {...register("detail")}
               />
               <FormLabel
                    className={cn({
                         "text-destructive": detailError,
                    })}
               >
                    Detail of Question
               </FormLabel>
               <FormDescription>
                    Describe your question (optional)
               </FormDescription>
               {detailError && (
                    <FormMessage>
                         {detailError.message}
                    </FormMessage>
               )}
               <InputFieldTextEditor
                    onSetInput={(text) => {
                         setValue("detail", text)
                         trigger("detail")
                    }}
                    initialValue={initialValue}
               />
          </div>
     )
}
