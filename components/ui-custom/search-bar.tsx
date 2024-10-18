import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SearchBarUI() {
	return (
		<div
			aria-label="search-bar"
			className="relative w-full flex items-center"
		>
			<Label
				htmlFor="input-search"
				className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50 peer-focus:opacity-100 transition-all duration-200"
			>
				<SearchIcon size={18} />
			</Label>
			<Input
				id="input-search"
				type="text"
				placeholder="search"
				className="peer pl-10 opacity-70 focus:opacity-100 transition-all duration-200"
			/>
		</div>
	);
}
