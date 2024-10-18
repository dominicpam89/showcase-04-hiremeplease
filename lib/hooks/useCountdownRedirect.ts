import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Parameters to be used in the custom hook.
 *
 * @typedef {Object} Params
 * @property {string} link - A link where to redirect after the countdown reaches zero.
 * @property {number} time - How long the countdown lasts, in seconds.
 */
interface Params {
	link: string;
	time: number;
}

export const useCountdownRedirect = ({ link, time }: Params) => {
	const router = useRouter();
	const [countdown, setCountDown] = useState(time);
	useEffect(() => {
		if (countdown == 0) router.push(link);
		else {
			const timer = setTimeout(() => setCountDown(countdown - 1), 1000);
			return () => clearTimeout(timer);
		}
	}, [countdown]);
	return { countdown };
};
