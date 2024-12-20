"use server"
import { delayRangeUtil } from "../utils"

type TQuestionMock = TypeQuestion<"fetch">
// Question Mock Data
const questionsMock: TQuestionMock[] = [
     {
          id: "1",
          question: "<h3>Human Skin</h3>",
          detail: `<div>
                    <ol style="list-style-type:decimal; padding-left:16px;">
                         <li>Why is human skin easily to burnt?</li>
                         <li>What's the best medicine to cure fungi?</li>
                    </ol>
               </div>`,
          categoryId: "1",
          imageUrl:
               "https://fakeimg.pl/480x320/f5e9ba/1f1c1c?text=Placeholder&font=bebas&font_size=32",
          uid: "user_01",
          answerIds: ["100", "105"],
          views: 150,
          upvotes: 10,
     },
     {
          id: "2",
          question: "<h3>Gravity</h3>",
          detail: `<div>
               <p>I don't quite understand about gravity. My teacher asked us to write paper about this. Please help!</p>
               <ol style="list-style-type:decimal; padding-left:16px;">
                    <li>Is it invisible force?</li>
                    <li>Can you describe more about the speed of gravity?</li>
               </ol>
          </div>`,
          imageUrl:
               "https://fakeimg.pl/480x320/f5e9ba/1f1c1c?text=Placeholder&font=bebas&font_size=32",
          categoryId: "2",
          uid: "user_02",
          answerIds: ["101", "106"],
          views: 200,
          upvotes: 25,
     },
     {
          id: "3",
          question:
               "<h3>What is the best programming language for beginners?</h3>",
          detail: `<div>
                    <ol style="list-style-type:decimal; padding-left:16px;">
                         <li>What's the trend in 2025?</li>
                         <li>Which one to pick for beginner?</li>
               
                    </ol>
               </div>`,
          categoryId: "3",
          imageUrl:
               "https://fakeimg.pl/480x320/f5e9ba/1f1c1c?text=Placeholder&font=bebas&font_size=32",
          uid: "user_03",
          answerIds: ["102"],
          views: 300,
          upvotes: 40,
     },
     {
          id: "4",
          question:
               "<h3>What are the benefits of meditation?</h3>",
          categoryId: "4",
          uid: "user_04",
          answerIds: ["103", "107"],
          views: 250,
          upvotes: 30,
     },
     {
          id: "5",
          question:
               "<h3>How to improve productivity at work?</h3>",
          categoryId: "5",
          imageUrl:
               "https://fakeimg.pl/480x320/f5e9ba/1f1c1c?text=Placeholder&font=bebas&font_size=32",
          uid: "user_05",
          answerIds: ["104"],
          views: 180,
          upvotes: 20,
     },
     {
          id: "6",
          question:
               "<h3>What are the key differences between JavaScript and TypeScript?</h3>",
          categoryId: "6",
          imageUrl:
               "https://fakeimg.pl/480x320/f5e9ba/1f1c1c?text=Placeholder&font=bebas&font_size=32",
          uid: "user_06",
          answerIds: ["108", "109"],
          views: 400,
          upvotes: 50,
     },
     {
          id: "7",
          question:
               "<h3>What are the best practices for secure password management?</h3>",
          categoryId: "7",
          uid: "user_07",
          answerIds: ["110"],
          views: 220,
          upvotes: 15,
     },
]

export async function getQuestions() {
     await delayRangeUtil(800, 150)
     return questionsMock
}

export async function getQuestion(id: string) {
     await delayRangeUtil(800, 150)
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
     await delayRangeUtil(800, 150)
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
     await delayRangeUtil(800, 150)
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
     await delayRangeUtil(800, 150)
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
