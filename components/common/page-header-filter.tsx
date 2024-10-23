"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui-custom/select-plain";

interface Props {
	selectText: string;
	items: TypeFilterSortItems[];
}
export default function PageHeaderFilter({ items, selectText }: Props) {
	return (
		<Select>
			<SelectTrigger className="w-full">
				<SelectValue placeholder={selectText} />
			</SelectTrigger>
			<SelectContent className="text-xs p-2">
				{items.map((item) => {
					return (
						<SelectItem key={item.val} value={item.val}>
							{item.text}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
}
