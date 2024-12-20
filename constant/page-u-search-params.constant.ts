export const questionFilter = {
     question: "question",
     tag: "tag",
     user: "user",
} as const

export const questionSortBy = {
     newest: "newest",
     oldest: "oldest",
     recommended: "recommended",
     frequent: "frequent",
     unanswered: "unanswered",
} as const

export type TQuestionFilter = keyof typeof questionFilter
export type TQuestionSortBy = keyof typeof questionSortBy
