type Items = TypeFilterSortItems[];

export const dashboardSelectItems: Items = [
	{ text: "Question", val: "question" },
	{ text: "Tag", val: "tag" },
	{ text: "User", val: "user" },
];

export const dashboardSortItems: Items = [
	{ text: "Oldest", val: "oldest" },
	{ text: "Newest", val: "newest" },
	{ text: "Recommended", val: "recommended" },
	{ text: "Frequent", val: "frequent" },
	{ text: "Unanswered", val: "unanswered" },
];
