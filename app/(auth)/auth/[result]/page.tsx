import AuthResultFail from "@/components/auth-result/fail";
import AuthResultSuccess from "@/components/auth-result/success";
import { notFound } from "next/navigation";

interface Props {
	params: {
		result: AuthResult;
	};
	searchParams: {
		type: AuthResultType;
	};
}
export default function Page({
	params: { result },
	searchParams: { type },
}: Props) {
	if (result === "fail") return <AuthResultFail />;
	else if (result === "success") return <AuthResultSuccess />;
	else return notFound();
}
