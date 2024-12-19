import { z } from "zod"

export const askQuestionSchema = z.object({
     question: z
          .string()
          .min(1, "Question can't be empty")
          .max(
               50,
               "Are you being serious? This question is too long!"
          ),
     category: z
          .string()
          .min(1, "Category must be selected"),
     detail: z.string().min(10, "Minimum 10 characters"),
     uid: z.string().min(1, "uid is missing!"),
})
export type TypeAskQuestionSchema = z.infer<
     typeof askQuestionSchema
>
