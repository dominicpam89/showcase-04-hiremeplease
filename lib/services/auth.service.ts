import { auth, db } from "@/firebase.config"
import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     User,
     updateProfile,
     signOut,
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_DEV

async function storeUserIntoDb(user: {
     uid: string
     email: string
     password: string
     firstName?: string
     lastName?: string
}) {
     try {
          await setDoc(doc(db, "users", user.uid), {
               name: {
                    first: user.firstName || "",
                    last: user.lastName || "",
               },
               email: user.email,
          })
     } catch (error) {
          console.error(error)
          throw error
     }
}

export async function sessionUpdate(user: User | null) {
     if (user) {
          const token = await user.getIdToken(true)
          try {
               const res = await fetch(
                    `${DOMAIN_URL}/api/auth/session`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type":
                                   "application/json",
                         },
                         body: JSON.stringify({ token }),
                    }
               )
               return (await res.json()) as {
                    success: boolean
                    mesasge: string
               }
          } catch (error) {
               console.log("couldn't update cookies", error)
               throw error
          }
     } else {
          throw new Error("Couldn't update token")
     }
}

export async function loginWithPassword({
     email,
     password,
}: {
     email: string
     password: string
}) {
     try {
          const { user } = await signInWithEmailAndPassword(
               auth,
               email,
               password
          )
          return await sessionUpdate(user)
     } catch (error) {
          console.error(error)
          throw error
     }
}

export async function registerWithPassword({
     email,
     password,
     firstName = "",
     lastName = "",
}: {
     email: string
     password: string
     firstName?: string
     lastName?: string
}) {
     try {
          const { user } =
               await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
               )
          await updateProfile(user, {
               displayName: firstName + " " + lastName,
          })
          await storeUserIntoDb({
               email,
               password,
               firstName,
               lastName,
               uid: user.uid,
          })
          return await sessionUpdate(user)
     } catch (error) {
          console.error(error)
          throw error
     }
}

export async function logout() {
     try {
          await signOut(auth)
          await fetch(`${DOMAIN_URL}/api/auth/logout`)
     } catch (error) {
          console.error(error)
          throw error
     }
}

export function getLimitedUserInfo(user: User) {
     const {
          email,
          emailVerified,
          displayName,
          uid,
          photoURL,
     } = user
     return {
          email,
          emailVerified,
          displayName,
          uid,
          photoURL,
     }
}
export type LimitedUserInfoType = ReturnType<
     typeof getLimitedUserInfo
>
