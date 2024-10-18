"use client";
import { ImgHTMLAttributes, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}
export default function ImageUI({ ...props }: Props) {
	const [image, setImage] = useState(false);
	const [error, setError] = useState(false);
	error;
	const onLoad = () => {
		console.log("image is loaded successfully");
		setImage(true);
		setError(false);
	};
	const onLoadStart = () => {
		console.log("image is currently being fetched");
		setImage(false);
		setError(false);
	};
	const onError = () => {
		console.log("failed to fetch image");
		setImage(true);
		setError(true);
	};
	return (
		<>
			{!image && <Skeleton className="w-full h-full" />}
			<img
				{...props}
				className={`w-full h-full object-cover object-left-bottom transition-all duration-300 ease-in-out ${
					image
						? "opacity-100 pointer-events-auto"
						: "pointer-events-none opacity-0"
				}`}
				onLoadStart={onLoadStart}
				onLoad={onLoad}
				onError={onError}
			/>
		</>
	);
}
