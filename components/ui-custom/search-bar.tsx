import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
	inputId?: string;
	compLabel?: string;
	placeholder?: string;
}
export default function SearchBarUI({
	inputId = "search-bar",
	compLabel = "search-bar",
	placeholder = "Search",
}: Props) {
	return (
		<div aria-label={compLabel} className="relative w-full flex items-center">
			<Label
				htmlFor={inputId}
				className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50 peer-focus:opacity-100 transition-all duration-200"
			>
				<SearchIcon size={18} />
			</Label>
			<Input
				id={inputId}
				type="text"
				placeholder={placeholder}
				className="peer pl-10 opacity-70 focus:opacity-100 transition-all duration-200"
			/>
		</div>
	);
}
