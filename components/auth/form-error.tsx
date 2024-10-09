import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleXIcon } from "lucide-react";

interface Props {
	message: string;
}
export default function FormErrorUI({ message }: Props) {
	return (
		<Alert variant="destructive" className="px-8 py-4">
			<AlertTitle className="text-lg font-bold">
				Validation failed
			</AlertTitle>
			<AlertDescription className="text-xs font-normal flex gap-1 items-center">
				<CircleXIcon className="size-4" />
				{message}
			</AlertDescription>
		</Alert>
	);
}
