"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
     Alert,
     AlertDescription,
     AlertTitle,
} from "@/components/ui/alert"
import { TerminalIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function ErrorCard({
     error,
     reset,
}: ErrorBoundaryProps) {
     const router = useRouter()
     const homeRoute = () => router.push("/u")
     return (
          <Alert className="p-6">
               <TerminalIcon className="h-4 w-4" />
               <AlertTitle className="font-bold text-destructive">
                    500 : Internal Server Error
               </AlertTitle>
               <AlertDescription>
                    {error.message + ". "}
                    Please contact{" "}
                    <Link
                         href="/problems"
                         className={cn(
                              "text-secondary-foreground dark:text-accent",
                              "underline underline-offset-2",
                              "hover:text-secondary-foreground/70 dark:hover:text-accent/70",
                              "transform transition-default"
                         )}
                    >
                         our administrator
                    </Link>{" "}
                    for further information
               </AlertDescription>
               <div
                    aria-label="alert-action"
                    className="mt-2 justify-self-end"
               >
                    <Button
                         size="sm"
                         onClick={homeRoute}
                         variant="link"
                    >
                         Go to dashboard
                    </Button>
                    <Button size="sm" onClick={reset}>
                         Try Again
                    </Button>
               </div>
          </Alert>
     )
}
