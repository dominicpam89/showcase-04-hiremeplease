"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui-custom/select-plain";

export default function DashboardHeaderSelect() {
	return (
		<Select>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="Filter Question" />
			</SelectTrigger>
			<SelectContent className="text-xs py-2 px-4">
				<SelectItem value="data-1">Fetch database 1</SelectItem>
				<SelectItem value="data-2">Fetch database 2</SelectItem>
				<SelectItem value="data-3">Fetch database 3</SelectItem>
			</SelectContent>
		</Select>
	);
}
