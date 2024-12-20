"use client"
import {
     Alert,
     AlertDescription,
     AlertTitle,
} from "@/components/ui/alert"
import { useCountdownRedirect } from "@/lib/hooks/useCountdownRedirect"
import TransLink from "../ui-custom/transition-link"

export default function AuthResultLogin() {
     const { countdown } = useCountdownRedirect({
          link: "/u",
          time: 3,
     })
     return (
          <Alert
               aria-label="auth-login-result"
               className="p-12 space-y-2 border-primary/50 dark:border-primary-foreground/50 text-primary dark:text-primary-foreground"
          >
               <AlertTitle className="font-extrabold uppercase text-xl">
                    Successfully logged in
               </AlertTitle>
               <AlertDescription>
                    You are going to be redirected in{" "}
                    {countdown}. Or if you&apos;re in hurry,
                    you can click here{" "}
                    <TransLink
                         href={
                              process.env
                                   .NEXT_PUBLIC_HOMEPAGE as string
                         }
                         className="underline underline-offset-4 transition-all ease-in-out font-normal hover:font-bold"
                    >
                         redirect to homepage
                    </TransLink>
               </AlertDescription>
          </Alert>
     )
}
