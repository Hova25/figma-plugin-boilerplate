import type { IconProps } from "@ui-src/icons/Icons";
import Icons from "@ui-src/icons/Icons";
import { Typography } from "@ui-src/src/app/_components/ui/Typography";
import type { BindHover } from "@ui-src/src/hooks/useHover";
import { useOnClickOutside } from "@ui-src/src/hooks/useOnClickOutside";
import { twm } from "@ui-src/src/utils/lib/twMerge";
import { type FC, useRef } from "react";

type MenuItemProps = {
	isMenuOpen: boolean;
	onClickOutside: () => void;
	className?: string;
	clickable?: boolean;
	items: ({
		onClick?: () => void;
		label: string;
		icon?: FC<IconProps>;
		className?: string;
		checked?: boolean;
	} & BindHover)[];
} & BindHover;

export const MenuItem: FC<MenuItemProps> = ({ isMenuOpen, onClickOutside, items, className, clickable, ...bindHover }) => {
	const menuRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(menuRef, () => {
		onClickOutside();
	});

	if (!isMenuOpen) {
		return null;
	}

	return (
		<div
			ref={menuRef}
			className={twm(
				"absolute right-14 flex flex-col gap-1 rounded-3 border-default border-y-[0.5px] bg-menu p-1 text-menu shadow-2xl [&_svg]:text-menu",
				className,
			)}
			{...bindHover}
		>
			{items.map(({ className: itemClassName, label, icon: Icon, checked, ...rest }) => (
				<Typography
					key={label}
					size="body1"
					fontWeight="light"
					className={twm(
						"flex w-full cursor-pointer flex-row items-center justify-between gap-2 text-nowrap rounded-2 py-1 hover:bg-brand-default",
						clickable ? "pr-2 pl-1" : "px-2",
						itemClassName,
					)}
					{...rest}
				>
					<span className="flex flex-row gap-1">
						{clickable ? <Icons.menuCheckMarkOn className={twm("size-4", checked ? "visible" : "invisible")} /> : ""}
						{label}
					</span>
					{Icon ? <Icon /> : ""}
				</Typography>
			))}
		</div>
	);
};
