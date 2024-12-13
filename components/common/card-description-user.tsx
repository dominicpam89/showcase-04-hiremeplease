import { readUser } from "@/lib/services/user.service.mock"
import { Suspense } from "react"

interface Props {
     uid: string
}
export default async function CardDescriptionUser({
     uid,
}: Props) {
     const user = await readUser(uid)
     if (!user) return <span>User not found</span>
     const fullName = user.name
     const userName = {
          first: fullName.first || "anon",
          last: fullName.last || "",
     }
     return (
          <Suspense fallback={<p>Loading user</p>}>
               <span
                    aria-label="description-user"
                    className="text-xs opacity-80"
               >
                    written by {'"'}
                    {userName.first} {userName.last}
                    {'"'}
               </span>
          </Suspense>
     )
}
