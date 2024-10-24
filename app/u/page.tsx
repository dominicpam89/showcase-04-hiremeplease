import DashboardContent from "@/components/page-u/dashboard-content";
import DashboardHeader from "@/components/page-u/dashboard-header";
import LoaderUI from "@/components/ui-custom/loader";
import { Suspense } from "react";

export default function Page() {
	return (
		<Suspense fallback={<LoaderUI />}>
			<DashboardHeader />
			<DashboardContent />
		</Suspense>
	);
}
