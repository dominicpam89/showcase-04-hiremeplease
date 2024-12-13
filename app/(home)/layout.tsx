"use client"
import { PropsWithChildren, useContext } from "react"
import { Button } from "@/components/ui/button"
import { ContextAuth } from "@/lib/context/auth.context"
import { ContextAuthType } from "@/lib/types/auth.context.type"

export default function Layout({
     children,
}: PropsWithChildren) {
     const { signoutState, userState } = useContext(
          ContextAuth
     ) as ContextAuthType
     return (
          <main
               aria-label="layout-homepage"
               className="p-6 md:p-12 lg:p-18 xl:p-24"
          >
               {userState && (
                    <Button
                         onClick={() =>
                              signoutState.mutate()
                         }
                    >
                         Logout
                    </Button>
               )}
               {children}
          </main>
     )
}
