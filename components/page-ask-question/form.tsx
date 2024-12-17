"use client"
import {
     useForm,
     FormProvider,
     SubmitHandler,
} from "react-hook-form"
import InputField from "@/components/ui-custom/input-field"
import { Button } from "@/components/ui/button"
import {
     TypeAskQuestionSchema,
     askQuestionSchema,
} from "@/lib/models/frontend/question.model"
import { zodResolver } from "@hookform/resolvers/zod"
import InputSelect from "@/components/ui-custom/input-select"
import { FormField } from "@/components/ui/form"

interface Props {
     uid: string
}
export default function AskQuestionForm({ uid }: Props) {
     const hookForm = useForm<TypeAskQuestionSchema>({
          resolver: zodResolver(askQuestionSchema),
          defaultValues: {
               question: "",
               category: "",
               uid,
          },
          mode: "onBlur",
          reValidateMode: "onChange",
     })

     const onValid: SubmitHandler<TypeAskQuestionSchema> = (
          data
     ) => {
          console.log(data)
     }

     return (
          <FormProvider {...hookForm}>
               <form
                    name="form-login"
                    className="w-full flex flex-col gap-4"
                    onSubmit={hookForm.handleSubmit(
                         onValid
                    )}
               >
                    <InputField<TypeAskQuestionSchema>
                         name="question"
                         label="Your Question"
                         placeholder="why the developer of this webapp is so handsome?"
                    />
                    <FormField
                         control={hookForm.control}
                         name="category"
                         render={({ field }) => (
                              <InputSelect<TypeAskQuestionSchema>
                                   field={field}
                              />
                         )}
                    />
                    <input
                         {...hookForm.register("uid")}
                         className="hidden"
                    />
                    <Button type="submit">
                         Submit Question
                    </Button>
               </form>
          </FormProvider>
     )
}
