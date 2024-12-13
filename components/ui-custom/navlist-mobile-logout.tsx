import { LogOutIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { ContextAuth } from "@/lib/context/auth.context"
import { ContextAuthType } from "@/lib/types/auth.context.type"

interface Props {
     onSelect?: () => void
}
export default function NavlistMobileLogout({
     onSelect = () => {},
}: Props) {
     const { signoutState } = useContext(
          ContextAuth
     ) as ContextAuthType
     return (
          <Button
               className="flex items-center gap-2"
               onClick={() => {
                    onSelect()
                    signoutState.mutate()
               }}
          >
               <LogOutIcon size={12} />
               Logout
          </Button>
     )
}
