import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SearchBarUI from "@/components/ui-custom/search-bar";
import PageHeaderFilter from "./page-header-filter";

interface Props {
	pageTitle: string;
	headerCompLabel: string;
	searchbarProps: {
		key: string;
		inputId: string;
		compLabel: string;
		placeholder: string;
	};
	headerSelectProps: {
		items: TypeFilterSortItems[];
		text: string;
	};
	headerSortProps: {
		items: TypeFilterSortItems[];
		text: string;
	};
}
export default function PageHeader({
	pageTitle,
	headerCompLabel,
	searchbarProps,
	headerSelectProps,
	headerSortProps,
}: Props) {
	return (
		<div
			aria-label={headerCompLabel}
			className={cn("w-full flex flex-col gap-4")}
		>
			<div aria-label="header-row-1" className="w-full flex justify-between">
				<h2
					aria-label="header-title"
					className={cn(
						"w-1/2 font-primary font-extrabold uppercase",
						"text-lg"
					)}
				>
					{pageTitle}
				</h2>
				<Button size="sm">Ask Question</Button>
			</div>
			<div
				aria-label="header-row-2"
				className={cn("grid grid-cols-9 gap-2 items-center")}
			>
				<div
					aria-label="search-bar-container"
					className={cn("col-span-9", "md:col-span-5")}
				>
					<SearchBarUI
						key={searchbarProps.key}
						inputId={searchbarProps.inputId}
						compLabel={searchbarProps.compLabel}
						placeholder={searchbarProps.placeholder}
					/>
				</div>
				<div
					aria-label="filter-container"
					className={cn(
						"col-span-9",
						"md:col-span-4",
						"grid grid-cols-2 gap-2"
					)}
				>
					<PageHeaderFilter
						key="filterBy"
						paramsKey="filterBy"
						items={headerSelectProps.items}
						selectText={headerSelectProps.text}
					/>
					<PageHeaderFilter
						key="sortBy"
						paramsKey="sortBy"
						items={headerSortProps.items}
						selectText={headerSortProps.text}
					/>
				</div>
			</div>
		</div>
	);
}
