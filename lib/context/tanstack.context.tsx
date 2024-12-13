"use client"

import {
     QueryClient,
     QueryClientProvider as Provider,
} from "@tanstack/react-query"
import { PropsWithChildren } from "react"

export default function QueryClientProvider({
     children,
}: PropsWithChildren) {
     const client = new QueryClient()
     return <Provider client={client}>{children}</Provider>
}
