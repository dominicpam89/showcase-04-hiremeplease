import { FormLoginType } from "./../models/frontend/auth.model";
import { useState } from "react";
import { FormRegisterType } from "@/lib/models/frontend/auth.model";

const simulateDelay = async (delay: number = 800) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(true), delay);
	});
};

export const useContextMockProps = () => {
	const [isPending, setPending] = useState(false);
	const [isSuccess, setSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState({ message: "" });
	const [data, setData] = useState<FormRegisterType | FormLoginType | null>(
		null
	);

	const mockAuth = async (
		inputData: FormRegisterType | FormLoginType,
		setFail: boolean
	) => {
		// Reset states before beginning authentication process
		setPending(true);
		setSuccess(false);
		setIsError(false);
		setError({ message: "" });
		setData(null);

		await simulateDelay(800);

		// Handle error case early
		if (setFail) {
			setIsError(true);
			setError({ message: "Mock error!" });
			setPending(false); // Stop pending state immediately if failure
			return;
		}

		// Success case
		setData(inputData);
		await simulateDelay(1000); // Optional delay for successful case
		setSuccess(true);

		setPending(false);
	};

	return {
		isPending,
		isSuccess,
		isError,
		error,
		data,
		mockAuth,
	};
};
export type UseContextMockProps = ReturnType<typeof useContextMockProps>;
