import { IconButton } from "@ui-src/src/app/_components/ui/IconButton";
import { twm } from "@ui-src/src/utils/lib/twMerge";
import { type FC, useEffect, useState } from "react";

type CheckboxProps = {
	className?: string;
	checkboxMinus?: boolean;
	onClick?: (checked: boolean) => void;
	selected?: boolean;
	defaultValue?: boolean;
};

export const Checkbox: FC<CheckboxProps> = ({ selected, checkboxMinus, onClick, className, defaultValue = true }) => {
	const [checked, setChecked] = useState(defaultValue);

	useEffect(() => {
		if (selected !== undefined) {
			setChecked(selected);
		}
	}, [selected]);

	const handleClick = () => {
		onClick?.(checkboxMinus || !checked);
		if (!checkboxMinus) {
			setChecked(!checked);
		}
	};

	return (
		<IconButton
			className={twm("transition", className)}
			onClick={handleClick}
			variant={checked ? "brand" : "secondary"}
			icon={checked ? (checkboxMinus ? "checkboxMinus" : "checkboxChecked") : "checkboxEmpty"}
		/>
	);
};
