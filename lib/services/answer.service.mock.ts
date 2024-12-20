"use server"
import { delayRangeUtil } from "../utils"

const answersMock: TypeAnswerFetch[] = [
     {
          id: "100",
          answer: "<p>The capital of France is <strong>Paris</strong>.</p>",
          questionId: "1",
          uid: "user_05",
          views: 120,
          upvotes: 10,
     },
     {
          id: "105",
          answer: "<p><strong>Paris</strong> is known for its <em>Eiffel Tower</em> and historical landmarks.</p>",
          questionId: "1",
          uid: "user_04",
          views: 150,
          upvotes: 15,
     },
     {
          id: "101",
          answer: "<p><strong>Gravity</strong> is a force that attracts objects towards the center of the Earth.</p>",
          questionId: "2",
          uid: "user_01",
          views: 180,
          upvotes: 20,
     },
     {
          id: "106",
          answer: "<p>It is described by <em>Newton's law of universal gravitation</em>.</p>",
          questionId: "2",
          uid: "user_03",
          views: 220,
          upvotes: 30,
     },
     {
          id: "102",
          answer: "<p>The best programming language for beginners is <strong>Python</strong>.</p>",
          questionId: "3",
          uid: "user_03",
          views: 250,
          upvotes: 35,
     },
     {
          id: "103",
          answer: "<p><strong>Meditation</strong> helps reduce stress and improve focus.</p>",
          questionId: "4",
          uid: "user_07",
          views: 200,
          upvotes: 25,
     },
     {
          id: "107",
          answer: "<p><strong>Meditation</strong> is also beneficial for <em>emotional regulation</em>.</p>",
          questionId: "4",
          uid: "user_01",
          views: 240,
          upvotes: 30,
     },
     {
          id: "104",
          answer: "<p>Productivity at work can be improved by using <strong>time management techniques</strong>.</p>",
          questionId: "5",
          uid: "user_06",
          views: 170,
          upvotes: 15,
     },
     {
          id: "108",
          answer: "<p><strong>JavaScript</strong> is a dynamic language, while <strong>TypeScript</strong> is statically typed.</p>",
          questionId: "6",
          uid: "user_03",
          views: 300,
          upvotes: 40,
     },
     {
          id: "109",
          answer: "<p><strong>TypeScript</strong> offers better tooling and error detection compared to <strong>JavaScript</strong>.</p>",
          questionId: "6",
          uid: "user_02",
          views: 350,
          upvotes: 45,
     },
     {
          id: "110",
          answer: "<p>A strong password should be long, contain special characters, and avoid dictionary words.</p>",
          questionId: "7",
          uid: "user_06",
          views: 210,
          upvotes: 18,
     },
]

export async function getAnswers(questionId: string) {
     await delayRangeUtil(805, 150)
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
     await delayRangeUtil(805, 150)
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
     await delayRangeUtil(805, 150)
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
     await delayRangeUtil(805, 150)
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
     await delayRangeUtil(805, 150)
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
     await delayRangeUtil(805, 150)
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
