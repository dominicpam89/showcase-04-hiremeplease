import { delayRangeUtil } from "../utils"

const answersMock: TypeAnswerFetch[] = [
     {
          id: "100", // Matches with the answerId from question 1
          answer: "The capital of France is Paris.",
          questionId: "1", // Matches the question ID in questionsMock
          uid: "user_05", // Matches the user ID from users mock data
          views: 120,
          upvotes: 10,
     },
     {
          id: "105", // Matches with the answerId from question 1
          answer: "Paris is known for its Eiffel Tower and historical landmarks.",
          questionId: "1", // Matches the question ID in questionsMock
          uid: "user_04", // Matches the user ID from users mock data
          views: 150,
          upvotes: 15,
     },
     {
          id: "101", // Matches with the answerId from question 2
          answer: "Gravity is a force that attracts objects towards the center of the Earth.",
          questionId: "2", // Matches the question ID in questionsMock
          uid: "user_01", // Matches the user ID from users mock data
          views: 180,
          upvotes: 20,
     },
     {
          id: "106", // Matches with the answerId from question 2
          answer: "It is described by Newton's law of universal gravitation.",
          questionId: "2", // Matches the question ID in questionsMock
          uid: "user_03", // Matches the user ID from users mock data
          views: 220,
          upvotes: 30,
     },
     {
          id: "102", // Matches with the answerId from question 3
          answer: "The best programming language for beginners is Python.",
          questionId: "3", // Matches the question ID in questionsMock
          uid: "user_03", // Matches the user ID from users mock data
          views: 250,
          upvotes: 35,
     },
     {
          id: "103", // Matches with the answerId from question 4
          answer: "Meditation helps reduce stress and improve focus.",
          questionId: "4", // Matches the question ID in questionsMock
          uid: "user_07", // Matches the user ID from users mock data
          views: 200,
          upvotes: 25,
     },
     {
          id: "107", // Matches with the answerId from question 4
          answer: "Meditation is also beneficial for emotional regulation.",
          questionId: "4", // Matches the question ID in questionsMock
          uid: "user_01", // Matches the user ID from users mock data
          views: 240,
          upvotes: 30,
     },
     {
          id: "104", // Matches with the answerId from question 5
          answer: "Productivity at work can be improved by using time management techniques.",
          questionId: "5", // Matches the question ID in questionsMock
          uid: "user_06", // Matches the user ID from users mock data
          views: 170,
          upvotes: 15,
     },
     {
          id: "108", // Matches with the answerId from question 6
          answer: "JavaScript is a dynamic language, while TypeScript is statically typed.",
          questionId: "6", // Matches the question ID in questionsMock
          uid: "user_03", // Matches the user ID from users mock data
          views: 300,
          upvotes: 40,
     },
     {
          id: "109", // Matches with the answerId from question 6
          answer: "TypeScript offers better tooling and error detection compared to JavaScript.",
          questionId: "6", // Matches the question ID in questionsMock
          uid: "user_02", // Matches the user ID from users mock data
          views: 350,
          upvotes: 45,
     },
     {
          id: "110", // Matches with the answerId from question 7
          answer: "A strong password should be long, contain special characters, and avoid dictionary words.",
          questionId: "7", // Matches the question ID in questionsMock
          uid: "user_06", // Matches the user ID from users mock data
          views: 210,
          upvotes: 18,
     },
]

export async function getAnswers(questionId: string) {
     await delayRangeUtil(3000, 1000)
     try {
          const answers = answersMock.filter(
               (ans) => ans.questionId == questionId
          )
          if (answers.length == 0)
               throw new Error(
                    "No answer for this question"
               )
          return answers
     } catch (error) {
          console.error(error)
          return null
     }
}

export async function getAnswer(id: string) {
     await delayRangeUtil(3000, 1000)
     try {
          const answer = answersMock.find(
               (ans) => ans.id == id
          )
          if (!answer)
               throw new Error("No answer with given id")
          return answer
     } catch (error) {
          console.error(error)
          return null
     }
}

export async function getAnswersByUser(uid: string) {
     await delayRangeUtil(3000, 1000)
     try {
          const answers = answersMock.filter(
               (ans) => ans.uid == uid
          )
          if (answers.length == 0)
               throw new Error(
                    "No answer for given user id"
               )
          return answers
     } catch (error) {
          console.error(error)
          return null
     }
}

export async function createAnswer(
     questionId: string,
     formData: TypeAnswerPush
) {
     await delayRangeUtil(3000, 1000)
     try {
          const lastId = Number(
               answersMock[answersMock.length - 1].id
          )
          answersMock.push({
               ...formData,
               id: (lastId + 1).toString(),
               questionId,
               views: 0,
               upvotes: 0,
          })
          return true
     } catch (error) {
          console.error(error)
          return false
     }
}

export async function updateAnswer(
     id: string,
     answer: Partial<TypeAnswerPush>
) {
     await delayRangeUtil(3000, 1000)
     try {
          const existingAnswerIndex = answersMock.findIndex(
               (ans) => ans.id === id
          )

          if (existingAnswerIndex === -1) {
               throw new Error("Answer not found")
          }

          // Update the existing answer with new values
          const updatedAnswer = {
               ...answersMock[existingAnswerIndex],
               ...answer,
          }
          answersMock[existingAnswerIndex] = updatedAnswer

          return true
     } catch (error) {
          console.error(error)
          return false
     }
}

export async function deleteAnswer(id: string) {
     await delayRangeUtil(3000, 1000)
     try {
          const answerIndex = answersMock.findIndex(
               (ans) => ans.id === id
          )

          if (answerIndex === -1) {
               throw new Error("Answer not found")
          }

          // Remove the answer from the mock data
          answersMock.splice(answerIndex, 1)
          return true
     } catch (error) {
          console.error(error)
          return false
     }
}
