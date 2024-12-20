import { z } from "zod"

function getTextContent(htmlString: string) {
     const parser = new DOMParser()
     const doc = parser.parseFromString(
          htmlString,
          "text/html"
     )

     const elements = doc.querySelectorAll(
          "p, h1, h2, h3, h4, h5, h6, ul, ol, li"
     )

     let charTotal = 0

     elements.forEach((val) => {
          charTotal += val.textContent?.trim().length || 0
     })

     return charTotal
}

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
     detail: z.string().refine(
          (htmlString) => {
               const charTotal = getTextContent(htmlString)
               const isOkay =
                    charTotal >= 10 || charTotal == 0
               return isOkay
          },
          {
               message: "Minimum is 10 characters, or not at all",
          }
     ),
     uid: z.string().min(1, "uid is missing!"),
})
export type TypeAskQuestionSchema = z.infer<
     typeof askQuestionSchema
>
