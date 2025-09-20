import type { BindHover } from "@ui-src/src/hooks/useHover";
import { type ReactElement, forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const typographyVariants = tv({
	base: "",
	variants: {
		variant: {
			default: "text-default",
			secondary: "text-secondary-default",
		},
		size: {
			body: "text-base",
			body1: "text-2xs",
			body2: "text-[10px]",
			body3: "text-[9px]",
		},
		fontWeight: {
			semibold: "font-semibold",
			normal: "font-normal",
			light: "font-light",
		},
	},
	defaultVariants: {
		fontWeight: "normal",
		size: "body1",
	},
});

type TypographyVariants = VariantProps<typeof typographyVariants>;

export type TypographyProps = TypographyVariants & {
	className?: string;
	children: string | number | (string | number | ReactElement<TypographyProps>)[];
	onClick?: () => void;
	title?: string;
} & BindHover;

export const Typography = forwardRef<HTMLSpanElement, TypographyProps>(
	({ children, onClick, title, onMouseLeave, onMouseEnter, ...typographyVariantsProps }, ref) => {
		const typographyVariant = typographyVariants(typographyVariantsProps);

		return (
			<span
				ref={ref}
				onClick={onClick}
				onKeyDown={onClick}
				className={typographyVariant}
				title={title}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{children}
			</span>
		);
	},
);
