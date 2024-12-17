/* eslint-disable @typescript-eslint/no-unused-vars */
import { delayRangeUtil } from "../utils"

const categories: TypeCategory<"fetch">[] = [
     { id: "1", val: "math" },
     { id: "2", val: "biology" },
     { id: "3", val: "psychology" },
     { id: "4", val: "geography" },
     { id: "5", val: "physics" },
     { id: "6", val: "tech" },
     { id: "7", val: "music" },
     { id: "8", val: "art" },
]

export async function getCategories() {
     await delayRangeUtil(900, 305)
     return categories
}

export async function getCategoryById(id: string) {
     await delayRangeUtil(790, 240)
     try {
          const category = categories.find(
               (cat) => cat.id == id
          )
          if (!category)
               throw new Error(
                    "There's no category with given id"
               )
          return category
     } catch (error) {
          return null
     }
}

export async function createCategory(
     val: TypeCategory<"push">
) {
     await delayRangeUtil(890, 320)
     try {
          const lastId =
               categories[categories.length - 1].id
          const id = (Number(lastId) + 1).toString()
          const newCategory: TypeCategory<"fetch"> = {
               id,
               val,
          }
          if (val.length == 0) throw false
          categories.push(newCategory)
          return true
     } catch (error) {
          return error
     }
}

export async function updateCategory(
     id: string,
     val: TypeCategory<"push">
) {
     await delayRangeUtil(920, 330)
     try {
          const index = categories.findIndex(
               (cat) => cat.id == id
          )
          if (index < 0) throw false
          categories[index] = { id, val }
          return true
     } catch (error) {
          return error
     }
}

export async function deleteCategory(id: string) {
     await delayRangeUtil(920, 330)
     try {
          const index = categories.findIndex(
               (cat) => cat.id == id
          )
          if (index < 0) throw false
          categories.splice(index, 1)
          return true
     } catch (error) {
          return error
     }
}
