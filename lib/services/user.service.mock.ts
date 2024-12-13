"use server"
import { delayRangeUtil } from "../utils"

// User Mock Data
const users: Record<string, TypeStoredUser> = {
     user_01: {
          email: "user1@example.com",
          name: { first: "Alice", last: "Smith" },
     },
     user_02: {
          email: "user2@example.com",
          name: { first: "Bob", last: "Jones" },
     },
     user_03: {
          email: "user3@example.com",
          name: { first: "Charlie", last: "Brown" },
     },
     user_04: {
          email: "user4@example.com",
          name: { first: "Dana", last: "White" },
     },
     user_05: {
          email: "user5@example.com",
          name: { first: "Eve", last: "Green" },
     },
     user_06: {
          email: "user6@example.com",
          name: { first: "Frank", last: "Black" },
     },
     user_07: {
          email: "user7@example.com",
          name: { first: "Grace", last: "Lee" },
     },
}

export async function createUser(
     uid: string,
     userData: TypeStoredUser
): Promise<void> {
     try {
          await delayRangeUtil(870, 120)
          users[uid] = userData
          console.log(
               `User with UID ${uid} created successfully.`
          )
     } catch (error) {
          console.error(
               `Error creating user with UID ${uid}:`,
               error
          )
     }
}

export async function readUser(
     uid: string
): Promise<TypeStoredUser | null> {
     try {
          await delayRangeUtil(870, 120)
          if (users[uid]) {
               return users[uid]
          } else {
               console.warn(
                    `User with UID ${uid} not found.`
               )
               throw new Error(
                    `User with UID ${uid} not found.`
               )
          }
     } catch (error) {
          console.error(
               `Error fetching user with UID ${uid}:`,
               error
          )
          return null
     }
}

export async function updateUser(
     uid: string,
     userData: Partial<TypeStoredUser>
): Promise<void> {
     try {
          await delayRangeUtil(870, 120)
          if (users[uid]) {
               users[uid] = { ...users[uid], ...userData }
               console.log(
                    `User with UID ${uid} updated successfully.`
               )
          } else {
               console.warn(
                    `User with UID ${uid} not found.`
               )
          }
     } catch (error) {
          console.error(
               `Error updating user with UID ${uid}:`,
               error
          )
     }
}

export async function deleteUser(
     uid: string
): Promise<void> {
     try {
          await delayRangeUtil(870, 120)
          if (users[uid]) {
               delete users[uid]
               console.log(
                    `User with UID ${uid} deleted successfully.`
               )
          } else {
               console.warn(
                    `User with UID ${uid} not found.`
               )
          }
     } catch (error) {
          console.error(
               `Error deleting user with UID ${uid}:`,
               error
          )
     }
}
