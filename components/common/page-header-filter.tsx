"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	dashboardSelectItems,
	dashboardSortItems,
} from "@/constant/page-filter.constant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
	selectText: string;
	items: TypeFilterSortItems[];
	paramsKey: "filterBy" | "sortBy";
}
export default function PageHeaderFilter({
	items,
	selectText,
	paramsKey,
}: Props) {
	// declaration of client hooks
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	// search params operations
	const hasFilter = searchParams.has("filterBy");
	const hasSort = searchParams.has("sortBy");
	const isFilterBy = paramsKey == "filterBy";

	const [select, setSelect] = useState<string>("");

	// synchronize UI select with searchParams
	useEffect(() => {
		if (hasFilter && isFilterBy) {
			const filterBy = searchParams.get("filterBy")!;
			setSelect(filterBy);
		}
		if (hasSort && !isFilterBy) {
			setSelect(searchParams.get("sortBy")!);
		}
	}, [hasFilter, hasSort, isFilterBy]);

	// default search params if its empty
	useEffect(() => {
		if (searchParams.size == 0) {
			router.replace(
				pathname +
					"?filterBy=" +
					dashboardSelectItems.at(0)?.val +
					"&sortBy=" +
					dashboardSortItems.at(0)?.val
			);
		}
	}, [searchParams]);

	const onValueChange = (val: string) => {
		setSelect(val);
		let url = pathname + "?";
		if (!searchParams.size) {
			url = `${pathname}?${paramsKey}=${select}`;
		} else {
			if (hasFilter && hasSort && isFilterBy) {
				url += `filterBy=${val}&sortBy=${searchParams.get("sortBy")}`;
			}
			if (hasFilter && hasSort && !isFilterBy) {
				url += `filterBy=${searchParams.get("filterBy")}&sortBy=${val}`;
			}
			if (hasFilter && !hasSort && !isFilterBy) {
				url += `filterBy=${searchParams.get("filterBy")}&sortBy=${val}`;
			}
			if (!hasFilter && hasSort && isFilterBy) {
				url += `filterBy=${val}&sortBy=${searchParams.get("sortBy")}`;
			}
		}
		router.replace(url);
	};

	return (
		<Select onValueChange={onValueChange} value={select}>
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
