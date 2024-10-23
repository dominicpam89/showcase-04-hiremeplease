import PageHeader from "@/components/common/page-header";

export default function DashboardHeader() {
	const selectItems = [
		{ text: "Question", val: "question" },
		{ text: "Tag", val: "tag" },
		{ text: "User", val: "user" },
	];
	return (
		<PageHeader
			pageTitle="Ask Questions"
			searchbarProps={{
				key: "dashboard-search",
				compLabel: "dashboard-search",
				inputId: "dashboard-search",
				placeholder: "search question",
			}}
			headerSelectProps={{
				text: "Filter",
				items: selectItems,
			}}
		/>
	);
}
