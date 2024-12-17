import { Badge } from "@/components/ui/badge"
import { getCategoryById } from "@/lib/services/category.service.mock"

interface Props {
     categoryId: string
}
export default async function QuestionCategory({
     categoryId,
}: Props) {
     const category = await getCategoryById(categoryId)
     if (!category) return <p>No category is set!</p>
     return (
          <div
               aria-label="tags-container"
               className="p-2 px-0 flex items-center gap-1"
          >
               <Badge variant="outline">
                    {category.val}
               </Badge>
          </div>
     )
}
