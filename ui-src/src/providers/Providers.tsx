import {PluginOnMessageProvider} from "@ui-src/src/providers/PluginOnMessageProvider";
import {RouterProvider} from "@ui-src/src/providers/RouterProvider";
import type {FC, PropsWithChildren} from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<PluginOnMessageProvider>
			<RouterProvider>{children}</RouterProvider>
		</PluginOnMessageProvider>
	);
};
