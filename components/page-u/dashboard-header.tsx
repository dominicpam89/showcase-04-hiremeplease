import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SearchBarUI from "@/components/ui-custom/search-bar";

export default function DashboardHeader() {
	return (
		<div
			aria-label="dashboard-header"
			className={cn("w-full grid grid-cols-4 gap-2 items-center", "order-1")}
		>
			<h2
				aria-label="header-title"
				className={cn(
					"w-full font-primary font-extrabold text-2xl uppercase",
					"col-span-3",
					"lg:col-span-1"
				)}
			>
				All Questions
			</h2>
			<Button className={cn("order-2 col-span-1", "lg:order-3")}>
				Ask Question
			</Button>
			<div
				aria-label="dashboard-navbar"
				className={cn(
					"mt-4",
					"lg:mt-0",
					"grid grid-cols-3 gap-2 items-center",
					"order-3 col-span-4",
					"lg:order-2 lg:col-span-2"
				)}
			>
				<div aria-label="search-bar-container" className={cn("col-span-2")}>
					<SearchBarUI
						key="dashboard-search"
						compLabel="dashboard-search"
						placeholder="search questions"
					/>
				</div>
				<div aria-label="filter-container" className={cn("col-span-1")}>
					Select Filter
				</div>
			</div>
		</div>
	);
}
