import Icons from "@ui-src/icons/Icons";
import type { ButtonHTMLAttributes, FC } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const iconButtonVariants = tv({
	base: "cursor-pointer flex items-center justify-center",
	variants: {
		size: {
			md: "min-w-6 min-h-6 max-h-6 max-w-6 svg:size-4 rounded-2 ",
		},
		variant: {
			brand: "text-icon-brand-default hover:text-icon-brand-secondary",
			secondary: "bg-secondary hover:bg-tertiary",
			ghost: "text-icon-default hover:text-icon-onbrand-secondary	",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

type IconButtonVariants = VariantProps<typeof iconButtonVariants>;

type IconButtonProps = IconButtonVariants & {
	className?: string;
	icon: keyof typeof Icons;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton: FC<IconButtonProps> = ({ icon, variant, size, className, ...buttonHtmlAttributes }) => {
	const iconButtonClassName = iconButtonVariants({ variant, size, className });
	const RenderIcon = Icons[icon];

	return (
		<button {...buttonHtmlAttributes} className={iconButtonClassName}>
			{<RenderIcon />}
		</button>
	);
};
