import type { FC } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const separatorVariants = tv({
	base: "border-default",
	variants: {
		size: {
			sm: "",
		},
		variant: {
			horizontal: "",
			vertical: "",
		},
	},
	defaultVariants: {
		size: "sm",
		variant: "horizontal",
	},
	compoundVariants: [
		{
			size: "sm",
			variant: "horizontal",
			className: "border-b",
		},
		{
			size: "sm",
			variant: "vertical",
			className: "border-r",
		},
	],
});

type SeparatorVariants = VariantProps<typeof separatorVariants>;
type SeparatorProps = SeparatorVariants & {
	className?: string;
};

export const Separator: FC<SeparatorProps> = (separatorProps) => {
	const separatorClassName = separatorVariants(separatorProps);

	return <div aria-label="separator" className={separatorClassName} />;
};
