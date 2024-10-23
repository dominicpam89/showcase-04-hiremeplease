import { Badge } from "@/components/ui/badge";

interface Props {
	tags: string[];
}
export default function QuestionTags({ tags }: Props) {
	return (
		<div
			aria-label="tags-container"
			className="p-2 px-0 flex items-center gap-1"
		>
			{tags.map((tag) => (
				<Badge key={tag} variant="outline">
					{tag}
				</Badge>
			))}
		</div>
	);
}
