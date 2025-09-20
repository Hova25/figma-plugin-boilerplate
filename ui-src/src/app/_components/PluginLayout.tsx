import {WINDOW_HEIGHT} from "@shared/window.const";
import {PluginFooter, type PluginFooterProps} from "@ui-src/src/app/_components/PluginFooter";
import {twm} from "@ui-src/src/utils/lib/twMerge";
import type {FC, PropsWithChildren} from "react";

type PluginLayout = PropsWithChildren<{
	className?: string;
	forceHeight?: string;
	pluginFooterProps?: PluginFooterProps;
}>;

export const PluginLayout: FC<PluginLayout> = ({ pluginFooterProps, className, forceHeight, children }) => {
	return (
		<div className={twm("flex h-full flex-col justify-between", className)}>
			<div style={{ height: WINDOW_HEIGHT - 50 }} className={twm("overflow-auto", forceHeight)}>
				{children}
			</div>

			{pluginFooterProps && <PluginFooter {...pluginFooterProps} />}
		</div>
	);
};
