import {TagInput} from "@ui-src/src/app/_components/ui/TagInput";
import {useOnClickOutside} from "@ui-src/src/hooks/useOnClickOutside";
import {type FC, useEffect, useRef, useState} from "react";
import {tv, type VariantProps} from "tailwind-variants";

const tagVariants = tv({
	slots: {
		base: "w-fit h-fit cursor-default",
		input: "w-fit inline-block data-[visible=true]:block data-[visible=false]:hidden",
	},
	variants: {
		size: {
			xs: {
				base: "text-[9px] px-1 rounded-0.75",
				input: "h-[15.5px] px-1 text-[9px]",
			},
		},
		variant: {
			danger: {
				base: "bg-danger-secondary text-danger-secondary",
			},
			component: {
				base: "bg-component-tertiary text-component-default",
			},
			aiGenerated: {
				base: "bg-component-tertiary text-component-default hover:border-component-hover border border-transparent data-[locked=true]:border-component-strong",
				input:
					"bg-component-tertiary text-component-default hover:border-component-hover border border-transparent data-[locked=true]:border-component-strong",
			},
			old: {
				base: "bg-brand-tertiary text-brand-default",
			},
		},
	},
	defaultVariants: {
		size: "xs",
	},
});

type TagVariants = VariantProps<typeof tagVariants>;

export type TagProps = TagVariants & {
	text: string;
	className?: string;
	onClickOutside?: (tag: string) => void;
	onLock?: (selected: boolean) => void;
};

export const Tag: FC<TagProps> = ({ text, onClickOutside, onLock, ...tagVariantsProps }) => {
	const { base, input } = tagVariants(tagVariantsProps);
	const [editable, setEditable] = useState(false);
	const [isLocked, setIsLocked] = useState(false);
	const [value, setValue] = useState(text);
	const inputRef = useRef<HTMLInputElement>(null!);

	useEffect(() => {
		setValue(value);
	}, [text]);

	useOnClickOutside(inputRef, () => {
		if (editable) {
			setEditable(false);
			onClickOutside?.(value);
		}
	});

	const handleDoubleClickTag = () => {
		if (onClickOutside) {
			setEditable(true);
			setEditable(true);

			setTimeout(() => {
				inputRef.current?.select();
			}, 50);
		}
	};

	const handleClickTag = () => {
		if (onLock) {
			setIsLocked((old) => {
				onLock(!old);
				return !old;
			});
		}
	};

	return (
		<>
			<TagInput ref={inputRef} data-visible={editable} value={value} onChange={setValue} className={input()} />
			{!editable && (
				<span
					className={base()}
					data-locked={isLocked}
					onClick={handleClickTag}
					onKeyDown={handleClickTag}
					onDoubleClick={handleDoubleClickTag}
				>
					{text}
				</span>
			)}
		</>
	);
};
