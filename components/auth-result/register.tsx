"use client"
import {
     Alert,
     AlertDescription,
     AlertTitle,
} from "@/components/ui/alert"
import { ContextAuth } from "@/lib/context/auth.context"
import { ContextAuthType } from "@/lib/types/auth.context.type"
import { useContext } from "react"
import TransLink from "../ui-custom/transition-link"

export default function AuthResultRegister() {
     const { userState } = useContext(
          ContextAuth
     ) as ContextAuthType
     return (
          <Alert
               aria-label="auth-login-result"
               className="p-12 space-y-2 border-primary/50 dark:border-primary-foreground/50 text-primary dark:text-primary-foreground"
          >
               <AlertTitle className="font-extrabold uppercase text-xl">
                    Successfully registered your account!
               </AlertTitle>
               <AlertDescription>
                    Welcome {userState!.displayName}
                    <TransLink
                         href={
                              process.env
                                   .NEXT_PUBLIC_HOMEPAGE as string
                         }
                         className="underline underline-offset-4 transition-all ease-in-out font-normal hover:font-bold"
                    >
                         Click here
                    </TransLink>{" "}
                    to redirect to dashboard right away
               </AlertDescription>
          </Alert>
     )
}
