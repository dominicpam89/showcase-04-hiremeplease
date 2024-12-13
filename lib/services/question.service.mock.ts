import { delayRangeUtil } from "../utils"

type TQuestionMock = TypeQuestion<"fetch">
// Question Mock Data
const questionsMock: TQuestionMock[] = [
     {
          id: "1",
          question: "What is the capital of France?",
          tags: ["geography", "countries"],
          uid: "user_01",
          answerIds: ["100", "105"],
          views: 150,
          upvotes: 10,
     },
     {
          id: "2",
          question: "How does gravity work?",
          tags: ["science", "physics"],
          uid: "user_02",
          answerIds: ["101", "106"],
          views: 200,
          upvotes: 25,
     },
     {
          id: "3",
          question:
               "What is the best programming language for beginners?",
          tags: ["programming", "beginners"],
          uid: "user_03",
          answerIds: ["102"],
          views: 300,
          upvotes: 40,
     },
     {
          id: "4",
          question: "What are the benefits of meditation?",
          tags: ["health", "mindfulness"],
          uid: "user_04",
          answerIds: ["103", "107"],
          views: 250,
          upvotes: 30,
     },
     {
          id: "5",
          question: "How to improve productivity at work?",
          tags: ["productivity", "work"],
          uid: "user_05",
          answerIds: ["104"],
          views: 180,
          upvotes: 20,
     },
     {
          id: "6",
          question:
               "What are the key differences between JavaScript and TypeScript?",
          tags: ["programming", "typescript", "javascript"],
          uid: "user_06",
          answerIds: ["108", "109"],
          views: 400,
          upvotes: 50,
     },
     {
          id: "7",
          question:
               "What are the best practices for secure password management?",
          tags: ["security", "password"],
          uid: "user_07",
          answerIds: ["110"],
          views: 220,
          upvotes: 15,
     },
]

export async function getQuestions() {
     await delayRangeUtil()
     return questionsMock
}

export async function getQuestion(id: string) {
     await delayRangeUtil()
     try {
          const question = questionsMock.find(
               (q) => q.id == id
          )
          if (!question)
               throw new Error(
                    "Couldn't find question with given id"
               )
          return question
     } catch (error) {
          throw error
     }
}

export async function createQuestion(
     formData: Omit<TQuestionMock, "id">
) {
     await delayRangeUtil()
     try {
          const lastIdNumber =
               questionsMock[questionsMock.length - 1].id
          const newQuestion = {
               id: lastIdNumber + 1,
               ...formData,
          }
          questionsMock.push(newQuestion)
          return true
     } catch (error) {
          throw error
     }
}

export async function updateQuestion(
     id: string,
     formData: Partial<Omit<TQuestionMock, "id">>
) {
     await delayRangeUtil()
     try {
          const question = await getQuestion(id)
          const index = questionsMock.findIndex(
               (q) => q.id == id
          )
          if (index === -1)
               throw new Error(
                    "No questionIndex with given id"
               )
          questionsMock[index] = {
               ...question,
               ...formData,
          }
          return questionsMock[index]
     } catch (error) {
          throw error
     }
}

export async function deleteQuestion(id: string) {
     await delayRangeUtil()
     try {
          const index = questionsMock.findIndex(
               (q) => q.id == id
          )
          if (index === -1)
               throw new Error(
                    "Question not found with the given id"
               )
          questionsMock.splice(index, 1)
          return true
     } catch (error) {
          throw error
     }
}
