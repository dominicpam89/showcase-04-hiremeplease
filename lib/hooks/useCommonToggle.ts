import { useState } from "react";

export const useCommonToggle = () => {
	const [open, setOpen] = useState(false);
	const onOpenChange = (o: boolean) => setOpen(o);
	const toggleOpen = () => setOpen(true);
	const toggleClose = () => setOpen(false);
	return { open, onOpenChange, toggleClose, toggleOpen };
};
