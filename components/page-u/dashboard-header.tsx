import PageHeader from "@/components/common/page-header";
import {
	dashboardSelectItems,
	dashboardSortItems,
} from "@/constant/page-filter";

export default function DashboardHeader() {
	return (
		<PageHeader
			pageTitle="Ask Questions"
			headerCompLabel="dashboard-header"
			searchbarProps={{
				key: "dashboard-search",
				compLabel: "dashboard-search",
				inputId: "dashboard-search",
				placeholder: "search question",
			}}
			headerSelectProps={{
				text: "SearchBy",
				items: dashboardSelectItems,
			}}
			headerSortProps={{
				text: "Sort",
				items: dashboardSortItems,
			}}
		/>
	);
}
