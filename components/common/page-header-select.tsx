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
	items: { text: string; val: string }[];
}
export default function PageHeaderSelect({ items, selectText }: Props) {
	return (
		<Select>
			<SelectTrigger className="w-full">
				<SelectValue placeholder={selectText} />
			</SelectTrigger>
			<SelectContent className="text-xs p-2">
				{items.map((item) => {
					return <SelectItem value={item.val}>{item.text}</SelectItem>;
				})}
			</SelectContent>
		</Select>
	);
}
