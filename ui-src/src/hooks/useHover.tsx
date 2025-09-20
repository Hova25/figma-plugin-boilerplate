import { useState } from "react";

export type BindHover = {
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

export const useHover = (): [boolean, BindHover, () => void] => {
	const [isHovered, setIsHovered] = useState(false);
	const bind = {
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
	};

	const cleanHover = () => setIsHovered(false);

	return [isHovered, bind, cleanHover];
};
