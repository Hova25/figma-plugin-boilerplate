import type { IconProps } from "@ui-src/icons/Icons";
import type { ButtonHTMLAttributes, FC } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
	base: "p-0 rounded-md font-semibold flex flex-row gap-2 items-center justify-center",
	variants: {
		size: {
			"2xs": "text-2xs p-1 rounded-2",
			xs: "text-xs",
			sm: "text-sm",
			md: "text-base px-4 py-2",
		},
		variant: {
			brand: "bg-brand-default hover:bg-brand-hover active:bg-brand-pressed text-onbrand-default",
			secondary: "text-secondary-default hover:text-secondary-hover",
			link: "disabled:text-secondary-default",
		},
	},
	defaultVariants: {
		size: "2xs",
		variant: "brand",
	},
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = ButtonVariants & {
	text: string;
	leftIcon?: FC<IconProps>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ text, variant, size, leftIcon: LeftIcon, className, ...buttonHtmlAttributes }) => {
	const buttonVariant = buttonVariants({ variant, size, className });
	return (
		<button {...buttonHtmlAttributes} className={buttonVariant}>
			{LeftIcon && <LeftIcon />}
			{text}
		</button>
	);
};
