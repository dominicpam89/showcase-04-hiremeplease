import AuthMainForm from "@/components/auth/main"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function Page() {
     const token = cookies().get("session-token")
     if (token) return redirect("/u")
     return <AuthMainForm authType="login" />
}
