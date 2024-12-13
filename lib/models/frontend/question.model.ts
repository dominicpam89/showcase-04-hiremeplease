import { z } from "zod"

export const askQuestionSchema = z.object({
     question: z
          .string()
          .min(1, "Question can't be empty")
          .max(
               50,
               "Are you being serious? This question is too long!"
          ),
     tags: z
          .string()
          .min(1, "Must have at least one valid tag!")
          .transform((data) =>
               data.split(",").map((tag) => tag.trim())
          ) // transform into an array
          .refine(
               (tags) =>
                    tags.length > 0 &&
                    tags.every((tag) => tag.length > 0),
               "Must have at least one valid tag!" // Validate
          )
          .transform((tagsArray) => tagsArray.join(",")), // transform back into the original string
     uid: z.string().min(1, "uid is missing!"),
})
export type TypeAskQuestionSchema = z.infer<
     typeof askQuestionSchema
>
