// Question Type

type TypeQuestionPush = {
     question: string
     detail?: string
     imageUrl?: string
     categoryId: TypeCategory<"fetch">["id"]
     uid: string // author firebase user's id
}

type TypeQuestionFetchRaw = TypeQuestionPush & {
     answerIds: string[]
     views: number
     upvotes: number
}
type TypeQuestionFetch = TypeQuestionPush & {
     id: string
     answerIds: string[]
     views: number
     upvotes: number
}

declare type TypeQuestion<
     T extends "push" | "fetch" | "raw",
> = T extends "push"
     ? TypeQuestionPush
     : T extends "raw"
       ? TypeQuestionFetchRaw
       : TypeQuestionFetch

// Answer Type

type TypeAnswerPush = {
     answer: string
     questionId: string
     uid: string // firebase user's id
}

type TypeAnswerFetchRaw = TypeAnswerPush & {
     views: number
     upvotes: number
}
type TypeAnswerFetch = TypeAnswerPush & {
     id: string
     views: number
     upvotes: number
}

declare type TypeAnswer<
     T extends "push" | "fetch" | "raw",
> = T extends "push"
     ? TypeAnswerPush
     : T extends "raw"
       ? TypeAnswerFetchRaw
       : TypeAnswerFetch
