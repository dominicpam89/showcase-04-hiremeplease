declare type ErrorBoundaryProps = {
     error: Error & { digest?: string }
     reset: () => void
}

declare type TypeSize = "sm" | "md" | "lg"

declare type TypeNavItem = {
     link: string
     text: string
     icon: React.ReactNode
}

declare type TypeFilterSortItems = {
     val: string
     text: string
}
