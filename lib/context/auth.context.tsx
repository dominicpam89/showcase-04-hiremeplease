"use client"
import { useMutation } from "@tanstack/react-query"
import { createContext, useEffect, useState } from "react"
import {
     loginWithPassword,
     registerWithPassword,
     getLimitedUserInfo,
     LimitedUserInfoType,
     logout,
} from "@/lib/services/auth.service"
import { ContextAuthType } from "@/lib/types/auth.context.type"
import { auth } from "@/firebase.config"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const ContextAuth =
     createContext<ContextAuthType | null>(null)

interface Props {
     children: React.ReactNode
}
export default function ContextAuthProvider({
     children,
}: Props) {
     const router = useRouter()

     const signinState = useMutation({
          mutationFn: loginWithPassword,
          onMutate() {
               toast("Logging in progress...")
          },
          onError(error) {
               toast.error(error.message)
          },
          onSuccess() {
               toast.success(
                    "You're going to be redirected to redirect page"
               )
               router.push("/auth/success?type=login")
          },
     })
     const signupState = useMutation({
          mutationFn: registerWithPassword,
          onMutate() {
               toast("Verifying your data...")
          },
          onError(error) {
               toast.error(error.message)
          },
          onSuccess: () => {
               toast.success(
                    "You're successfully registered"
               )
               router.push("/auth/success?type=register")
          },
     })
     const signoutState = useMutation({
          mutationFn: logout,
          onMutate() {
               toast("Signout your account...")
          },
          onSuccess: () => {
               toast.success("You're logged out")
               router.push("/login")
          },
     })

     const [userState, setUserState] =
          useState<LimitedUserInfoType | null>(null)

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(
               auth,
               async (user) => {
                    if (user) {
                         setUserState(
                              getLimitedUserInfo(user)
                         )
                    } else {
                         setUserState(null)
                    }
               }
          )
          return () => unsubscribe() // Clean up
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [auth])

     return (
          <ContextAuth.Provider
               value={{
                    signinState,
                    signupState,
                    signoutState,
                    userState,
               }}
          >
               {children}
          </ContextAuth.Provider>
     )
}
