import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
     cookies().delete("session-token")
     return NextResponse.redirect(
          new URL("/login", req.url)
     )
}
