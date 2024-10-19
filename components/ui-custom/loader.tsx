import sx from "./loader.module.css";
import { motion } from "framer-motion";

export default function LoaderUI() {
	return (
		<motion.div
			aria-label="transition"
			className="absolute inset-0 min-h-screen w-full bg-primary"
			initial={{ opacity: 0.9, zIndex: 50 }}
			animate={{ opacity: 0, zIndex: -50 }}
			exit={{ opacity: 0.9, zIndex: 50 }}
			transition={{ duration: 0.2, delay: 0.2 }}
		>
			<motion.div
				aria-label="loader-container"
				className="w-full h-full flex justify-center items-center"
				initial={{ opacity: 1 }}
				animate={{ opacity: 0 }}
				exit={{ opacity: 1 }}
				transition={{ duration: 0.1, delay: 0.2 }}
			>
				<div aria-label="loading-component" className={sx.loader}></div>
			</motion.div>
		</motion.div>
	);
}
