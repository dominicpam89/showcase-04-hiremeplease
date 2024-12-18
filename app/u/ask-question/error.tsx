"use client" // Error components must be Client Components

import ErrorCard from "@/components/common/error-card"
import { useEffect } from "react"

export default function Error(props: ErrorBoundaryProps) {
     useEffect(() => {
          // Log the error to an error reporting service
          console.error(props.error)
     }, [props.error])

     return <ErrorCard {...props} />
}
