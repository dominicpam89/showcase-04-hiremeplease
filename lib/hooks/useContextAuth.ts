import { useContext } from "react";
import { ContextAuth } from "@/lib/context/auth.context";
import { ContextAuthType } from "@/lib/types/auth.context.type";

export const useContextAuth = () => {
	const context = useContext(ContextAuth);
	return context as ContextAuthType;
};
