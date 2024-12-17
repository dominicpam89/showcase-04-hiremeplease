import { useQuery } from "@tanstack/react-query"
import { getCategories } from "@/lib/services/category.service.mock"

export function useCategories() {
     const categoryState = useQuery({
          queryKey: ["categories"],
          queryFn: getCategories,
     })
     return categoryState
}
