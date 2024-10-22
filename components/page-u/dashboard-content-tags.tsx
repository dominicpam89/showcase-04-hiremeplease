import { Badge } from "@/components/ui/badge";

interface Props {
	tags: string[];
}
export default function DashboardContentTags({ tags }: Props) {
	return (
		<div aria-label="tags-container" className="flex items-center gap-2">
			{tags.map((tag) => (
				<Badge variant="outline">{tag}</Badge>
			))}
			<p className="text-destructive text-xs">
				This tag if clicked, automatically filtering this page by it
			</p>
		</div>
	);
}
