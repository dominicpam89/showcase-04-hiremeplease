"use client"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ContextAuth } from "@/lib/context/auth.context"
import { ContextAuthType } from "@/lib/types/auth.context.type"
import { LogOutIcon } from "lucide-react"
import { useContext } from "react"

export default function NavbarDesktopLogoutUI() {
     const { signoutState } = useContext(
          ContextAuth
     ) as ContextAuthType
     return (
          <DropdownMenuItem
               className="flex gap-2 items-center"
               onClick={() => signoutState.mutate()}
          >
               <LogOutIcon size={12} />
               <span>Logout</span>
          </DropdownMenuItem>
     )
}
