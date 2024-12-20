import AskQuestionForm from "@/components/page-ask-question/form"
import { cookies } from "next/headers"

export default function Page() {
     const sessionToken =
          cookies().get("session-token")!.value
     const { uid } = JSON.parse(sessionToken)
     return (
          <>
               <AskQuestionForm uid={uid} />
          </>
     )
}
