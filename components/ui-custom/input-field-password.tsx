import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FieldValues, FieldError, Path, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface InputGroupProps<T extends FieldValues> {
	placeholder: string;
	name: Path<T>;
	icon?: React.ReactNode;
	label?: string;
	disabled?: boolean;
}

export default function InputField<T extends FieldValues>({
	placeholder,
	icon,
	name,
	label,
	disabled = false,
}: InputGroupProps<T>) {
	const {
		register,
		formState: { errors },
	} = useFormContext<T>();
	const [showPass, setShowPass] = useState(false);
	const togglePass = () => setShowPass(!showPass);
	return (
		<div aria-label="input-field" className="flex flex-col gap-2 w-full">
			{label && (
				<Label htmlFor={name} className="text-gray-500">
					{label}
				</Label>
			)}
			<div className="w-full flex gap-2 items-center">
				{icon && <span className="size-4 relative">{icon}</span>}
				<Input
					id={name}
					type={showPass ? "text" : "password"}
					placeholder={placeholder}
					{...register(name)}
					disabled={disabled}
				/>

				<Button
					aria-label="password-toggle"
					onClick={togglePass}
					variant="outline"
					size="icon"
					type="button"
					disabled={disabled}
				>
					{showPass ? (
						<EyeOffIcon className="size-5" />
					) : (
						<EyeIcon className="size-5" />
					)}
				</Button>
			</div>
			{errors[name] && (
				<p className="text-sm text-destructive transition-default">
					{(errors[name] as FieldError)?.message}
				</p>
			)}
		</div>
	);
}
