import { twm } from "@ui-src/src/utils/lib/twMerge";
import { type InputHTMLAttributes, forwardRef, useEffect, useState } from "react";

type TagInputProps = {
	className: string;
	onChange: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>(({ className, onChange, ...inputElements }: TagInputProps, ref) => {
	const [value, setValue] = useState<string>(inputElements.value?.toString() || "");

	useEffect(() => {
		if (ref && "current" in ref && ref.current) {
			const text = value || " ";
			const ctx = document.createElement("canvas").getContext("2d");
			if (ctx) {
				const computedStyle = window.getComputedStyle(ref.current);
				ctx.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;
				const textWidth = ctx.measureText(text).width + 10;
				ref.current.style.width = `${textWidth}px`;
				if (textWidth < 195) {
					onChange(text);
				}
			}
		}
	}, [value]);

	return (
		<input
			ref={ref}
			type="text"
			value={inputElements.value}
			onChange={(e) => setValue(e.target.value)}
			className={twm(
				"h-5 rounded-1 border-default bg-secondary text-[11px] text-default focus:shadow-none focus:outline-0 focus-visible:shadow-none",
				className,
			)}
			style={{ minWidth: "10px", maxWidth: "195px" }}
			{...inputElements}
		/>
	);
});
