import type {
	FormLoginType,
	FormRegisterType,
} from "@/lib/models/frontend/auth.model";
import { useContext, useState } from "react";
import { ContextAuthMock } from "@/lib/context/auth.context.mock";

const simulateDelay = async (delay: number = 800) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(true), delay);
	});
};

export const useContextAuthMockProps = () => {
	const [isPending, setPending] = useState(false);
	const [isSuccess, setSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState({ message: "" });
	const [data, setData] = useState<MockUser | null>(null);

	const createMockAuth = (type: "register" | "login") => {
		// Reset states before beginning authentication process
		setPending(true);
		setSuccess(false);
		setIsError(false);
		setError({ message: "" });
		setData(null);

		type InputData<T extends typeof type> = T extends "register"
			? FormRegisterType
			: FormLoginType;

		return async function (
			inputData: InputData<typeof type>,
			mockFail: boolean = false,
			mockVerified: boolean = false
		) {
			await simulateDelay(800);

			// Handle error case early
			if (mockFail) {
				setIsError(true);
				setError({ message: "Mock error!" });
				setPending(false); // Stop pending state immediately if failure
				return;
			}

			// Success case
			setData({
				email: inputData.email,
				password: inputData.password,
				uid: inputData.email,
				emailVerified: mockVerified,
			});
			await simulateDelay(1000); // Optional delay for successful case
			setSuccess(true);

			setPending(false);
		};
	};

	return {
		isPending,
		isSuccess,
		isError,
		error,
		data,
		createMockAuth,
	};
};
export type UseContextAuthMockProps = ReturnType<
	typeof useContextAuthMockProps
>;

export const useContextAuthMock = () => {
	const context = useContext(ContextAuthMock);
	return context as UseContextAuthMockProps;
};
