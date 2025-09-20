import { Typography, type TypographyProps } from "@ui-src/src/app/_components/ui/Typography";
import { Fragment, forwardRef } from "react";

type TextWithLineBreaksProps = {
	text: string;
} & Omit<TypographyProps, "children">;

export const TextWithLineBreaks = forwardRef<HTMLSpanElement, TextWithLineBreaksProps>(({ text, ...typographyProps }, ref) => {
	return (
		<Typography {...typographyProps}>
			{text.split(/\r?\n/).map((line, index) => (
				<Fragment key={index}>
					{line}
					<br />
				</Fragment>
			))}
		</Typography>
	);
});
